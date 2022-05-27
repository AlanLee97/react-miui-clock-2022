import { Switch } from 'antd';
import './style.scss';

export function AlarmItem(props: any) {
  return <div className="alarm-item">
      <div>
        <h2 className='alarm-time'>08:00</h2>
        <div className='alarm-text'>只响一次</div>
      </div>
      <Switch />
  </div>  
}