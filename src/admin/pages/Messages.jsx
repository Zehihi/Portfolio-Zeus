import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { storage } from '../utils/storage';
import '../styles/Messages.css';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = () => {
    setMessages(storage.getMessages());
  };

  const handleToggleRead = (id) => {
    storage.markMessageAsRead(id);
    loadMessages();
    setSelectedMessage(null);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      storage.deleteMessage(id);
      loadMessages();
      setSelectedMessage(null);
    }
  };

  const filteredMessages = messages.filter(msg => {
    if (filter === 'unread') return !msg.isRead;
    if (filter === 'read') return msg.isRead;
    return true;
  });

  return (
    <div className="admin-layout">
      <Sidebar />
      
      <div className="admin-main">
        <div className="admin-container">
          <div className="admin-header">
            <h1>Contact Messages</h1>
            <div className="header-info">
              <span className="total">Total: {messages.length}</span>
              <span className="unread">Unread: {messages.filter(m => !m.isRead).length}</span>
            </div>
          </div>

          <div className="messages-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Messages ({messages.length})
            </button>
            <button 
              className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
              onClick={() => setFilter('unread')}
            >
              Unread ({messages.filter(m => !m.isRead).length})
            </button>
            <button 
              className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
              onClick={() => setFilter('read')}
            >
              Read ({messages.filter(m => m.isRead).length})
            </button>
          </div>

          <div className="messages-container">
            <div className="messages-list">
              {filteredMessages.length === 0 ? (
                <div className="empty-state">
                  <p>No messages in this category.</p>
                </div>
              ) : (
                filteredMessages.map(msg => (
                  <div 
                    key={msg.id}
                    className={`message-item ${msg.isRead ? 'read' : 'unread'} ${
                      selectedMessage?.id === msg.id ? 'selected' : ''
                    }`}
                    onClick={() => setSelectedMessage(msg)}
                  >
                    <div className="message-header">
                      <span className="sender">{msg.name}</span>
                      <span className={`unread-indicator ${msg.isRead ? 'read' : 'unread'}`}>
                        {msg.isRead ? '✓' : '●'}
                      </span>
                    </div>
                    <div className="message-preview">
                      <span className="email">{msg.email}</span>
                      <p>{msg.message.substring(0, 50)}...</p>
                    </div>
                    <div className="message-time">
                      {new Date(msg.timestamp).toLocaleDateString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="message-detail">
              {selectedMessage ? (
                <div className="detail-content">
                  <div className="detail-header">
                    <h2>{selectedMessage.name}</h2>
                    <span className={`status-badge ${selectedMessage.isRead ? 'read' : 'unread'}`}>
                      {selectedMessage.isRead ? 'Read' : 'Unread'}
                    </span>
                  </div>

                  <div className="detail-info">
                    <div className="info-row">
                      <span className="label">Email:</span>
                      <a href={`mailto:${selectedMessage.email}`}>{selectedMessage.email}</a>
                    </div>
                    <div className="info-row">
                      <span className="label">Phone:</span>
                      <span>{selectedMessage.phone || 'Not provided'}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Date:</span>
                      <span>{new Date(selectedMessage.timestamp).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="detail-message">
                    <h3>Message:</h3>
                    <p>{selectedMessage.message}</p>
                  </div>

                  <div className="detail-actions">
                    <button 
                      className="action-btn mark-btn"
                      onClick={() => handleToggleRead(selectedMessage.id)}
                    >
                      {selectedMessage.isRead ? '📩 Mark Unread' : '✓ Mark Read'}
                    </button>
                    <button 
                      className="action-btn reply-btn"
                      onClick={() => window.location.href = `mailto:${selectedMessage.email}`}
                    >
                      📧 Reply
                    </button>
                    <button 
                      className="action-btn delete-btn"
                      onClick={() => handleDelete(selectedMessage.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ) : (
                <div className="empty-detail">
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
