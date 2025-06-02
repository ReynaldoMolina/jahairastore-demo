'use client';

import Image from 'next/image';

export default function HeaderProfile() {
  const user = {
    username: 'Invitado',
    pictureUrl: '/default-avatar.png',
  };

  return (
    <div
      className="flex flex-col absolute p-7 bg-white dark:bg-neutral-700 rounded-2xl justify-center items-center right-0 top-12 gap-4 shadow-sm z-1"
    >
      <Image src={user.pictureUrl} alt="User picture" width={32} height={32} className="size-12 rounded-full" />
      <h2
        className='text-sm'
      >{`¡Hola, ${user.username}!`}</h2>
    </div>
  );
}