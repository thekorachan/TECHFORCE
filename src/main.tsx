import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import FarmerProfileForm from './pages/FarmerProfileForm'
import FarmerSearch from './pages/FarmerSearch'
import ProjectSearch from './pages/ProjectSearch'
import MessageList from './pages/MessageList'
import ChatThread from './pages/ChatThread'
import { ToastProvider } from './lib/toast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <FarmerProfileForm /> },
      { path: 'search-farmers', element: <FarmerSearch /> },
      { path: 'search-projects', element: <ProjectSearch /> },
      { path: 'messages', element: <MessageList /> },
      { path: 'chat/chiangmai-6', element: <ChatThread /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastProvider>
      <div className="app-frame">
        <RouterProvider router={router} />
      </div>
    </ToastProvider>
  </React.StrictMode>
)
