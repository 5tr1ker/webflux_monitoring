import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  // 샘플 로그 데이터
  const logData = [
    {
      id: 1,
      name: 'DB 커넥트 로그',
      timestamp: '2024-01-15 14:30:25',
      level: 'DB',
      message: '시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n 시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n',
      service: 'Web Server',
      status: 'success'
    },
    {
      id: 2,
      name: 'ERROR 로그',
      timestamp: '2024-01-15 14:30:25',
      level: 'ERROR',
      message: '시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n 시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n시스템이 정상적으로 시작되었습니다. 모든 서비스가 순차적으로 로드되고 있으며, 데이터베이스 연결도 성공적으로 완료되었습니다. 사용자 인증 서비스와 API 게이트웨이도 정상 작동 중입니다. \n',
      service: 'Web Server',
      status: 'success'
    }
  ];

  const [logMessage, setLogMessage] = useState("");
  const logRef = useRef(null);
  const eventSourceRef = useRef(null);

  const [currentLogIndex, setCurrentLogIndex] = useState(1) ; //
  const currentLog = logData[currentLogIndex];

  useEffect(() => {
    setLogMessage("");
    // 기존 연결 종료
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }

    let type = currentLogIndex === 0 ? "db" : "error";
    const newEventSource = new EventSource(`http://localhost:8080/sse?type=${type}`);

    newEventSource.onmessage = (message) => {
      const receive = JSON.parse(message.data);
      if (receive.message === undefined) return;
      setLogMessage((prev) => prev + receive.message + "\n");
    };

    newEventSource.onerror = (err) => {
      console.error("SSE 오류: ", err);
      newEventSource.close();
    };

    // 새 연결 저장
    eventSourceRef.current = newEventSource;

    // 컴포넌트 언마운트 시 연결 종료
    return () => {
      if (eventSourceRef.current) {
        eventSourceRef.current.close();
        eventSourceRef.current = null;
      }
    };
  }, [currentLogIndex]);

  const selectLog = (index) => {
    setCurrentLogIndex(index);
  };

  useEffect(() => {
    logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [logMessage]);

  

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
                <div className="log-data" ref={logRef}>
                  <pre className="log-text">{logMessage}</pre>
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
