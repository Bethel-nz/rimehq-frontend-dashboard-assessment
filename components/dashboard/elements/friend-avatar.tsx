import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface FriendAvatarProps {
  name: string;
  status: string;
  avatarSrc: string;
  fallback: string;
  bgColor?: string;
}

export function FriendAvatar({
  name,
  status,
  avatarSrc,
  fallback,
  bgColor = 'bg-slate-100',
}: FriendAvatarProps) {
  return (
    <div className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800/10 transition-colors duration-200 cursor-pointer'>
      <div className={`p-0.5 rounded-full ${bgColor}`}>
        <Avatar className='w-8 h-8 border-2 border-white/10'>
          <AvatarImage src={avatarSrc} className='object-cover' />
          <AvatarFallback className='text-xs font-semibold bg-gray-700 text-gray-300'>
            {fallback}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className='flex-1 min-w-0'>
        <p className='text-sm font-medium text-gray-900 truncate'>{name}</p>
        <p className='text-xs text-gray-400 truncate'>{status}</p>
      </div>
    </div>
  );
}
