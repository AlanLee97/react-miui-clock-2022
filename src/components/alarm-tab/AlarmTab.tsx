import { AlarmItem } from "../alarm-item/AlarmItem";
import './style.scss';

export function AlarmTab(props: any) {
   return <div className="alarm-tab">
   {
       [1,2,3].map(item => {
           return <div key={item}><AlarmItem /></div>
       })
   }
</div> 
}