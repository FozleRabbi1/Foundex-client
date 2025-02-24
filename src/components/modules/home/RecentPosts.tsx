import React from 'react';
import Container from '../../UI/Container';
import { Button } from '@heroui/button';
import Link from 'next/link';

const RecentPosts = async () => {

    const res = await fetch("http://localhost:5000/api/v1/items?sortBy=-createdAt&limit=9")
    console.log( await res.json())

    return (
        <div>
            <Container>
                <div className='flex justify-normal items-center flex-col' >
                    <h2 className='font-semibold text-xl' >Recently Found Item</h2>
                    <p>A list of item</p>
                </div>

                <div>
                    <h2>
                        Resent Post
                    </h2>
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