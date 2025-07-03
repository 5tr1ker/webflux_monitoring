import React, { useState } from 'react';
import './App.css';

function App() {
  // 샘플 로그 데이터
  const logData = [
    {
      id: 1,
      name: 'A.log',
      timestamp: '2024-01-15 14:30:25',
      level: 'INFO',
      message: '시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n 시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n',
      service: 'Web Server',
      status: 'success'
    },
    {
      id: 2,
      name: 'B.log',
      timestamp: '2024-01-15 14:31:10',
      level: 'INFO',
      message: '데이터베이스 연결이 성공적으로 완료되었습니다. PostgreSQL 서버에 연결되어 있으며, 모든 테이블이 정상적으로 접근 가능합니다. 연결 풀도 적절히 설정되어 있어 성능 최적화가 완료되었습니다.',
      service: 'Database',
      status: 'success'
    },
    {
      id: 3,
      name: 'C.log',
      timestamp: '2024-01-15 14:32:05',
      level: 'INFO',
      message: '사용자 인증 서비스가 활성화되었습니다. JWT 토큰 발급 및 검증 기능이 정상 작동하며, OAuth2.0 연동도 성공적으로 설정되었습니다. 보안 정책이 적용되어 있어 안전한 인증이 가능합니다.',
      service: 'Auth Service',
      status: 'success'
    },
    {
      id: 4,
      name: 'D.log',
      timestamp: '2024-01-15 14:33:20',
      level: 'INFO',
      message: 'API 서버가 모든 엔드포인트에 대해 응답하고 있습니다. RESTful API 설계가 완료되었으며, GraphQL 엔드포인트도 정상 작동 중입니다. 요청/응답 로깅과 모니터링이 활성화되어 있습니다.',
      service: 'API Gateway',
      status: 'success'
    },
    {
      id: 5,
      name: 'E.log',
      timestamp: '2024-01-15 14:34:15',
      level: 'INFO',
      message: '모니터링 시스템이 모든 서비스를 정상적으로 추적하고 있습니다. Prometheus 메트릭 수집이 활성화되어 있으며, Grafana 대시보드도 실시간으로 업데이트되고 있습니다. 알림 시스템도 정상 작동 중입니다.',
      service: 'Monitoring',
      status: 'success'
    },
    {
      id: 6,
      name: 'F.log',
      timestamp: '2024-01-15 14:35:00',
      level: 'INFO',
      message: '캐시 서버가 성공적으로 시작되었습니다. Redis 클러스터가 구성되어 있으며, 세션 저장소와 데이터 캐싱이 정상 작동 중입니다. 메모리 사용량도 최적화되어 있습니다.',
      service: 'Cache Server',
      status: 'success'
    },
    {
      id: 7,
      name: 'G.log',
      timestamp: '2024-01-15 14:36:30',
      level: 'INFO',
      message: '파일 업로드 서비스가 활성화되었습니다. AWS S3 연동이 완료되었으며, 이미지 리사이징과 썸네일 생성 기능도 정상 작동 중입니다. CDN 연동도 성공적으로 설정되었습니다.',
      service: 'File Service',
      status: 'success'
    },
    {
      id: 8,
      name: 'H.log',
      timestamp: '2024-01-15 14:37:45',
      level: 'INFO',
      message: '이메일 발송 서비스가 준비되었습니다. SMTP 서버 연결이 성공적으로 완료되었으며, 템플릿 엔진도 정상 작동 중입니다. 스팸 필터링과 발송 제한 기능도 활성화되어 있습니다.',
      service: 'Email Service',
      status: 'success'
    },
    {
      id: 9,
      name: 'I.log',
      timestamp: '2024-01-18 08:07:37',
      level: 'INFO',
      message: '이메일 발송 서비스가 준비되었습니다. SMTP 서버 연결이 성공적으로 완료되었으며, 템플릿 엔진도 정상 작동 중입니다. 스팸 필터링과 발송 제한 기능도 활성화되어 있습니다.',
      service: 'Email Service',
      status: 'success'
    },
    {
      id: 10,
      name: 'J.log',
      timestamp: '2024-01-15 22:16:48',
      level: 'INFO',
      message: '이메일 발송 서비스가 준비되었습니다. SMTP 서버 연결이 성공적으로 완료되었으며, 템플릿 엔진도 정상 작동 중입니다. 스팸 필터링과 발송 제한 기능도 활성화되어 있습니다.',
      service: 'Email Service',
      status: 'success'
    }
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const currentLog = logData[currentLogIndex];

  const selectLog = (index) => {
    setCurrentLogIndex(index);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="title">
            <span className="icon">📊</span>
            로그 모니터링 시스템
          </h1>
          <p className="subtitle">실시간 시스템 상태를 확인하세요</p>
        </header>

        <div className="content-wrapper">
          {/* 사이드바 */}
          <aside className="sidebar">
            <h3 className="sidebar-title">로그 목록</h3>
            <div className="log-list">
              {logData.map((log, index) => (
                <button
                  key={log.id}
                  className={`log-item ${index === currentLogIndex ? 'active' : ''}`}
                  onClick={() => selectLog(index)}
                >
                  <span className="log-name">{log.name}</span>
                  <span className="log-time">{log.timestamp.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="main-content">
            <div className="log-card">
              <div className="log-header">
                <div className="log-info">
                  <span className="log-number">#{currentLog.id}</span>
                  <span className={`log-level log-${currentLog.level.toLowerCase()}`}>
                    {currentLog.level}
                  </span>
                </div>
                <div className="log-timestamp">{currentLog.timestamp}</div>
              </div>

              <div className="log-content">
                <div className="log-data">
                  <pre className="log-text">{currentLog.message}</pre>
                </div>
              </div>
            </div>
          </main>
        </div>

        <footer className="footer">
          <p>모든 시스템이 정상적으로 작동하고 있습니다 🚀</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
