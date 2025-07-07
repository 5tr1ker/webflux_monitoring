
# 📡 실시간 로그 모니터링 시스템

## 📝 소개
이 시스템은 특정 로그 파일에 기록되는 로그 정보를 실시간으로 수집하고, 이를 웹 화면에 실시간으로 표시하는 **로그 모니터링 플랫폼**입니다.

- **로그 수집**: Logstash
- **메시지 브로커**: Apache Kafka
- **백엔드 서버**: Spring WebFlux (SSE 기반)
- **프론트엔드**: React.js
- **데이터베이스**: MongoDB

---

## 🏗️ 시스템 아키텍처

![image](https://github.com/user-attachments/assets/2dbfe69f-f140-408d-a06c-d92743a1f653)


### 구성 요소 설명

- **Logstash**  
  `.log` 파일을 감지하여 로그 데이터를 수집합니다.  
  로그 메시지에 포함된 특정 키워드에 따라 **Kafka 토픽**으로 분류하여 전송하며, 필터링되지 않은 로그는 폐기됩니다.

- **Kafka**  
  Logstash로부터 수신한 로그 메시지를 큐에 저장하여 **비동기 처리**를 가능하게 합니다.

- **Spring WebFlux**  
  Kafka로부터 메시지를 수신하여 MongoDB에 저장하고, **SSE(Server-Sent Events)** 를 통해 클라이언트에 실시간 전송합니다.  
  클라이언트가 **최초 연결** 시, MongoDB에서 `최신 로그 30건`을 조회하여 먼저 전송합니다.

- **React.js**  
  Spring WebFlux 서버와 SSE 연결을 유지하며, 전달받은 로그를 사용자에게 실시간으로 출력합니다.

- **MongoDB**  
  수신된 로그 데이터를 저장합니다.  
  초기 연결 시 클라이언트에 전송할 로그 목록을 제공하는 역할도 수행합니다.

---

## 🚀 서버 실행 방법

### 1. MongoDB 실행

MongoDB 실행 후, `monitoring` 데이터베이스와 `monitoring` 컬렉션을 생성합니다.
```bash
# MongoDB 쉘 또는 Compass 등을 통해 생성
use monitoring
db.createCollection("monitoring")
```

---

### 2. Kafka 서버 실행

#### (1) Zookeeper 실행
```bash
.\zookeeper-server-start.bat ..\..\config\zookeeper.properties
```

#### (2) Kafka 서버 실행
```bash
.\kafka-server-start.bat ..\..\config\server.properties
```

#### (3) Kafka 토픽 생성
```bash
.\kafka-topics.bat --create --bootstrap-server localhost:9092 --topic error_topic
.\kafka-topics.bat --create --bootstrap-server localhost:9092 --topic db_topic
```

#### (4) 테스트용 Producer 실행 (선택)
```bash
.\kafka-console-producer.bat --broker-list localhost:9092 --topic error_topic
.\kafka-console-producer.bat --broker-list localhost:9092 --topic db_topic
```

#### (5) 테스트용 Consumer 실행 (선택)
```bash
.\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic error_topic --from-beginning
.\kafka-console-consumer.bat --bootstrap-server localhost:9092 --topic db_topic --from-beginning
```

📚 참고 블로그: [https://syk531.tistory.com/47](https://syk531.tistory.com/47)

---

### 3. Logstash 실행

`sjpark-pipeline.conf` 설정 파일이 위치한 경로에서 아래 명령어로 실행합니다.

```bash
.\bin\logstash.bat -f ".\sjpark-pipeline.conf"
```

⚠️ 설정 파일 내에서 Kafka 출력 설정, 로그 필터 조건 등을 알맞게 설정해야 합니다.
샘플 설정은 Github에 함께 올라가있습니다.

---

### 4. Spring Boot & React.js 실행

- **Spring Boot (WebFlux)**  
  `./gradlew bootRun` 또는 IDE에서 실행합니다.

- **React.js**  
  루트 디렉터리에서 다음 명령어로 개발 서버 실행:
  ```bash
  npm install
  npm start
  ```

---

## 📌 주의사항

- Logstash에서 필터링되지 않은 로그는 Kafka에 전송되지 않으므로 로그 구조와 패턴에 맞는 설정이 필수입니다.
- SSE는 브라우저 탭이 닫히면 자동으로 연결이 종료되며, 재접속 시 자동으로 최근 30개의 로그가 전송됩니다.
- Kafka 및 MongoDB 포트, 설정 파일 경로 등은 환경에 맞게 조정해주세요.

---

## 📬 문의

이 프로젝트에 대해 궁금한 점이 있다면 이슈를 등록하거나 PR을 통해 알려주세요.
