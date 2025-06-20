'use client';
import {
  LayoutDashboard,
  Inbox,
  BookOpen,
  CheckSquare,
  Users,
  Settings,
  LogOut,
  Sparkle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FriendAvatar } from './friend-avatar';

interface SidebarProps {
  onClose?: () => void;
}

export function Sidebar({ onClose }: SidebarProps) {
  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  return (
    <div className='w-64 bg-white border-r border-gray-200 p-4 lg:p-6 fixed h-full top-0 left-0 z-10 flex flex-col overflow-y-auto shadow-xl lg:shadow-none'>
      <motion.div
        className='flex items-center gap-2 mb-6 lg:mb-8'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          className='w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center'
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          <Sparkle className='w-4 h-4 fill-white stroke-white stroke-1' />
        </motion.div>
        <span className='font-semibold text-lg'>Coursue</span>
      </motion.div>

      <div className='space-y-6 flex-1'>
        <div>
          <h3 className='text-xs font-medium text-gray-500 uppercase tracking-wider mb-3'>
            OVERVIEW
          </h3>
          <nav className='space-y-1'>
            <motion.a
              href='#'
              className='flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg bg-purple-50 text-purple-600'
              onClick={handleLinkClick}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <LayoutDashboard className='w-4 h-4 fill-purple-600 stroke-purple-600' />
              Dashboard
            </motion.a>

            {[
              { icon: Inbox, label: 'Inbox' },
              { icon: BookOpen, label: 'Lesson' },
              { icon: CheckSquare, label: 'Task' },
              { icon: Users, label: 'Group' },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href='#'
                className='flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200'
                onClick={handleLinkClick}
                whileHover={{ x: 4, backgroundColor: 'rgba(249, 250, 251, 1)' }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <item.icon className='w-4 h-4' />
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <div>
          <h3 className='text-xs font-medium text-gray-400 uppercase tracking-wider mb-3'>
            FRIENDS
          </h3>
          <div className='space-y-3'>
            <FriendAvatar
              name='Bagus Mahjoie'
              status='Friend'
              avatarSrc='/avatars/memo_9.png'
              fallback='BM'
              bgColor='bg-blue-500'
            />
            <FriendAvatar
              name='Sir Dandy'
              status='Old Friend'
              avatarSrc='/avatars/memo_12.png'
              fallback='SD'
              bgColor='bg-green-500'
            />
            <FriendAvatar
              name='Jhon Tosan'
              status='Friend'
              avatarSrc='/avatars/memo_35.png'
              fallback='JT'
              bgColor='bg-orange-500'
            />
          </div>
        </div>
      </div>

      <motion.div
        className='mt-auto'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className='text-xs font-medium text-gray-500 uppercase tracking-wider mb-3'>
          SETTINGS
        </h3>
        <nav className='space-y-1'>
          <motion.a
            href='#'
            className='flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200'
            onClick={handleLinkClick}
            whileHover={{ x: 4 }}
          >
            <Settings className='w-4 h-4' />
            Setting
          </motion.a>
          <motion.a
            href='#'
            className='flex items-center font-semibold gap-3 px-3 py-2 text-sm text-red-400 hover:bg-red-50 rounded-lg transition-colors duration-200'
            onClick={handleLinkClick}
            whileHover={{ x: 4 }}
          >
            <LogOut className='w-4 h-4' />
            Logout
          </motion.a>
        </nav>
      </motion.div>
    </div>
  );
}
