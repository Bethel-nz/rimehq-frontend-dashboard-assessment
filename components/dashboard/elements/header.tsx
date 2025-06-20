'use client';
import { Search, Bell, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.div
      className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8 px-4 lg:px-6 pt-4 lg:pt-6 gap-4 w-full'
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex-1 max-w-2xl order-2 sm:order-1'>
        <div className='relative w-full rounded-full'>
          <Search
            className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4'
            size={16}
            strokeWidth={3}
          />
          <Input
            placeholder='Search your course...'
            className='pl-10 w-full bg-white border-2 border-gray-300 rounded-full h-10 lg:h-12 text-sm lg:text-md font-semibold text-gray-900/90 placeholder:text-gray-900/40 transition-all duration-200 focus:border-purple-300 focus:ring-2 focus:ring-purple-100'
          />
        </div>
      </div>

      <div className='flex items-center justify-between sm:justify-end gap-3 flex-shrink-0 order-1 sm:order-2'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='ghost'
              size='icon'
              className='size-10 lg:size-12 border-2 border-gray-200 rounded-full hover:bg-gray-50 transition-colors duration-200'
            >
              <Mail className='w-4 lg:w-5 h-4 lg:h-5 stroke-black stroke-2' />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='ghost'
              size='icon'
              className='w-10 lg:w-12 h-10 lg:h-12 border-2 border-gray-200 rounded-full hover:bg-gray-50 relative transition-colors duration-200'
            >
              <Bell className='w-4 lg:w-5 h-4 lg:h-5 fill-black stroke-white stroke-1' />
              <motion.div
                className='absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white'
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
          </motion.div>
        </div>

        <div className='flex items-center gap-2 lg:gap-3 sm:ml-2 sm:border-l-2 sm:border-gray-200 sm:pl-4'>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Avatar className='size-10 lg:size-12'>
              <AvatarImage src='/avatars/user-avatar.png' />
              <AvatarFallback className='bg-orange-100 text-orange-600 font-semibold'>
                JR
              </AvatarFallback>
            </Avatar>
          </motion.div>
          <span className='font-semibold text-gray-900 text-sm lg:text-base'>
            Jason Ranti
          </span>
        </div>
      </div>
    </motion.div>
  );
}
