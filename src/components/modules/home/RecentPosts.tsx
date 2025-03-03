import React from 'react';
import Container from '../../UI/Container';
import { Button } from '@heroui/button';
import Link from 'next/link';
import { getResentPost } from '@/src/services/ResentPost';
import Card from '@/src/components/UI/Card';
import { TItem } from '@/src/types';



const RecentPosts = async () => {

    const { data: postData } = await getResentPost()
    console.log(postData)

    return (
        <div>
            <Container>
                <div className='flex justify-normal items-center flex-col' >
                    <h2 className='font-semibold text-xl' >Recently Found Item</h2>
                    <p>A list of item</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10' >
                    {
                        postData?.map((item : TItem ) => <div key={item._id} >
                            <Card item={item}/>
                        </div>)
                    }
                </div>

                <div className='flex justify-center mt-5 ' >
                    <Button>
                        <Link href="/found-items" > See ALl </Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default RecentPosts;