import reactDom from 'react-dom/client';
import App from './app'


const AppLayout = ()=>{
    return(<div className="app">
      <App/>
        
    </div>
    );
  };
  const root = reactDom.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);