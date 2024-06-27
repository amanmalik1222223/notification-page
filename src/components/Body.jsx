import React, { useEffect, useState } from 'react';
import img1 from '../assets/avatar-mark-webber.webp'
import img2 from '../assets/avatar-angela-gray.webp'
import img3 from '../assets/avatar-jacob-thompson.webp'
import img4 from '../assets/avatar-rizky-hasanuddin.webp'
import img5 from '../assets/avatar-kimberly-smith.webp'
import imgliked from '../assets/image-chess.webp'
import img6 from '../assets/avatar-nathan-peterson.webp'
import img7 from '../assets/avatar-anna-kim.webp'
function Body() {
    const [checkedArr, setCheckedArr] = useState(['checked', 'checked', 'checked', 'unchecked', 'unchecked', 'unchecked', 'unchecked']);
    const [number, setNumber] = useState(0);
    useEffect(() => {
        let count = 0;
        function checker() {
            
            checkedArr.forEach((check, index) => {
                if (check === 'checked') {
                    document.getElementById('item0' + (index + 1)).classList.add('bg-gray-100')
                    count++

                }
                else {
                    document.getElementById('item0' + (index + 1)).classList.add('bg-none')
                    document.getElementById('item0' + (index + 1)).classList.remove('bg-gray-100')
                    
                }
            })
            setNumber(count);
        }
        checker();
    }, [checkedArr])

    const removeUnchecked = () => {
        const newCheckedAr = checkedArr.map(check => (check === 'checked' ? 'unchecked' : check));
        setCheckedArr(newCheckedAr);
        setNumber(0)
    }

    return (
        <div className='w-full px-[20px] py-[20px] h-auto md:w-1/3 mx-auto flex flex-col gap-5'>

            <div className='flex items-center flex-row justify-between mb-[30px]'>
                <div className='text-xl font-medium flex flex-row gap-3 items-center'>
                    <div className='py-1'><h1>Notifications</h1></div>
                    <p className='bg-blue-900 text-white px-3 py-1 rounded-lg w-auto'>{number}</p>
                </div>
                <div
                    onClick={removeUnchecked}
                    className='flex text-grayish-blue text-md w-auto hover:cursor-pointer'>
                    <p>Mark all as read</p>
                </div>
            </div>

            <div
                id='item01'
                defaultValue={checkedArr[0]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img1} alt="" /></div>
                <div className='py-3 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Mark Webber </span>
                        reacted to your recent post
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'> My first tournament today!</span></p>
                    <p className='text-sm text-blue-300'>1m ago</p>
                </div>
            </div>
            <div id='item02' defaultValue={checkedArr[1]} className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img2} alt="" /></div>
                <div className='py-3 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Angela Gray </span>
                        followed you

                    </p>
                    <p className='text-sm text-blue-300'>5m ago</p>
                </div>
            </div>
            <div
                id='item03'
                defaultValue={checkedArr[2]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5 '>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img3} alt="" /></div>
                <div className='py-3 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Jacob Thompson </span>
                        has joined your group
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'> Chess Club</span></p>
                    <p className='text-sm text-blue-300'>1 day ago</p>
                </div>
            </div>


            <div
                id='item04'
                defaultValue={checkedArr[3]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img4} alt="" /></div>
                <div className='py-3 gap-2 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Rizky Hasanuddin </span>
                        sent you a private message
                    </p>
                    <p className='text-sm text-blue-300 mb-2'>5 days ago</p>

                    <div className='border broder-gray-200 px-3 py-1 rounded-lg hover:bg-blue-50 text-sm hover:cursor-pointer'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and
                        I'm already having lots of fun and improving my game.</div>
                </div>
            </div>

            <div
                id='item05'
                defaultValue={checkedArr[5]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img5} alt="" /></div>
                <div className='py-3 w-4/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Kimberly Smith </span>
                        commented on your picture</p>

                    <p className='text-sm text-blue-300'>1 week ago</p>
                </div>
                <div className='w-1/12 justify-center flex items-center hover:cursor-pointer'><img src={imgliked} alt="" /></div>
            </div>

            <div
                id='item06'
                defaultValue={checkedArr[6]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img6} alt="" /></div>
                <div className='py-3 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Nathan Peterson </span>
                        reacted to your recent post
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'> 5 end-game strategies to increase your win rate
                        </span></p>
                    <p className='text-sm text-blue-300'>2 weeks ago</p>
                </div>
            </div>

            <div
                id='item07'
                defaultValue={checkedArr[6]}
                className='flex rounded-xl w-full px-[10px] py-[10px] gap-5'>
                <div className='flex items-center justify-center w-1/6'><img
                    className='rounded-full'
                    src={img7} alt="" /></div>
                <div className='py-3 w-5/6'>
                    <p className='text-md '>
                        <span className='hover:text-indigo-900 font-medium text-black hover:cursor-pointer'>Anna Kim </span>
                        left the group
                        <span className='hover:text-gray-300  text-blue-700 font-medium text-black hover:cursor-pointer'> Chess Club
                        </span></p>
                    <p className='text-sm text-blue-300'>2 weeks ago</p>
                </div>
            </div>







        </div>
    );
}

export default Body