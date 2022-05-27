import React from "react";
import {Button} from 'antd';
import './style.scss';
import Tab from "../../components/tab/Tab";
import { useDispatch, useSelector } from "react-redux";
import { menuList, currentMenu, setCurrentMenu } from "../../store/reducers";

export default function Home(props: any) {

    return <div className="home">
        <Tab />
    </div>
}