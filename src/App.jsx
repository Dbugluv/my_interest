import './App.scss';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  return (
    <div className="App">
      <Button type="primary" shape="round" icon={<DownloadOutlined />}/>...
    </div>
  );
}

export default App;
