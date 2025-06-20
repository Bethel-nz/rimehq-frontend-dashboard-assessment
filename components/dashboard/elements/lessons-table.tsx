'use client';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

const lessonData = [
  {
    id: '1',
    mentor: {
      name: 'Padhang Satrio',
      avatar: '/avatars/memo_12.png',
      date: '2/16/2024',
    },
    type: 'UI/UX DESIGN',
    description: 'Understand Of UI/UX Design',
  },
];

export function LessonsTable() {
  return (
    <motion.div
      className='mb-8'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className='flex items-center justify-between mb-6'>
        <h3 className='font-semibold text-lg lg:text-xl font-plus-jakarta-sans'>
          Your Lesson
        </h3>
        <Button
          variant='link'
          className='text-purple-600 font-semibold underline hover:text-purple-700 transition-colors duration-200'
        >
          See all
        </Button>
      </div>

      <Card className='border-2 border-gray-300/20 rounded-3xl p-0 overflow-hidden'>
        <CardContent className='p-0'>
          <div className='overflow-x-auto'>
            <table className='w-full min-w-[600px]'>
              <thead>
                <tr className='border-b border-gray-200'>
                  <th className='text-left py-3 px-4 lg:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                    MENTOR
                  </th>
                  <th className='text-left py-3 px-4 lg:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                    TYPE
                  </th>
                  <th className='text-left py-3 px-4 lg:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                    DESC
                  </th>
                  <th className='text-center py-3 px-4 lg:px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider'>
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                {lessonData.map((lesson, index) => (
                  <motion.tr
                    key={lesson.id}
                    className='hover:bg-gray-50/50 transition-colors duration-200'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ backgroundColor: 'rgba(249, 250, 251, 0.8)' }}
                  >
                    <td className='py-4 px-4 lg:px-6'>
                      <div className='flex items-center gap-3'>
                        <Avatar className='w-8 lg:w-10 h-8 lg:h-10'>
                          <AvatarImage src={lesson.mentor.avatar} />
                          <AvatarFallback>
                            {lesson.mentor.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className='font-bold text-sm text-gray-900'>
                            {lesson.mentor.name}
                          </p>
                          <p className='text-xs text-gray-500'>
                            {lesson.mentor.date}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-4 px-4 lg:px-6'>
                      <Badge
                        variant='secondary'
                        className='text-xs bg-purple-100 text-purple-600 rounded-full font-semibold'
                      >
                        {lesson.type}
                      </Badge>
                    </td>
                    <td className='py-4 px-4 lg:px-6'>
                      <span className='text-sm font-medium text-gray-700'>
                        {lesson.description}
                      </span>
                    </td>
                    <td className='py-4 px-4 lg:px-6 text-center'>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          size='icon'
                          variant='outline'
                          className='w-8 lg:w-10 h-8 lg:h-10 rounded-full border-2 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200'
                        >
                          <ExternalLink className='w-3 lg:w-4 h-3 lg:h-4 text-gray-600' />
                        </Button>
                      </motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
