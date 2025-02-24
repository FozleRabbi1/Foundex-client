import { Input } from '@heroui/input';
import React from 'react';
import { SearchIcon } from '../../icons';

const Landingg = () => {
    return (
        <div>
            <div className="h-screen bg-[url('/home.jpg')] bg-cover bg-center" >

                <div className='max-w-xl mx-auto pt-20' >
                <form action="">
                    <Input
                        aria-label='search'
                        classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
                        placeholder='Search...'
                        size='lg'
                        startContent={
                            <SearchIcon className="pointer-events-none flex-shrink-0 " />
                        }
                        type='text'
                    />

                </form>
                </div>
            </div>
        </div>
    );
};

export default Landingg;