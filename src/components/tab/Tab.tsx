import { Carousel } from "antd";
import { CarouselRef } from "antd/lib/carousel";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { currentMenu, setCurrentMenu, menuList } from "../../store/reducers";
import { AlarmTab } from "../alarm-tab/AlarmTab";
import './style.scss';

function MenuHeader(props: any) {
    const menuListState = useSelector(menuList);
    const currentMenuState = useSelector(currentMenu);
    const dispatch = useDispatch();
    const isActive = (i: number) => currentMenuState === i;
    
    return <div className="menu-header">
        {
            menuListState.map((item: any, index: number) => {
                return <h2 key={item} onClick={() => {
                    dispatch(setCurrentMenu(index));
                    props.onCurrentMenuChange && props.onCurrentMenuChange(index);
                }} className={`${isActive(index) ? 'active-menu' : ''}`}>{item}</h2>
            })
        }
    </div>
}

export default function Tab(props: any) {
    const dispatch = useDispatch();

    const refCarousel = useRef<CarouselRef>(null);
    useEffect(() => {
        console.log('refCarousel', refCarousel);
    })
    return <div className="tabs-container">
        <MenuHeader onCurrentMenuChange={(index: number) => {
            console.log(index);
            refCarousel.current?.goTo(index);
        }}/>
        <div className="tabs-content">
            <Carousel dots={false} ref={refCarousel} afterChange={index => {
                console.log('afterChange', index);
                dispatch(setCurrentMenu(index));
            }}>
                <div className="item">
                    <AlarmTab />
                </div>
                <div className="item">时钟</div>
                <div className="item">秒表</div>
                <div className="item">计时</div>
            </Carousel>
        </div>
    </div>
}