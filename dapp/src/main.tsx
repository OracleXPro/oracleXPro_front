import * as React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 确保document.getElementById('root')能够正确获取元素
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// 使用ReactDOM.createRoot创建根节点
const root = ReactDOM.createRoot(rootElement);

// 在React.StrictMode环境中渲染App组件
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
