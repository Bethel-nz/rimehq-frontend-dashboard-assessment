'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import {
  Heart,
  Code,
  ChevronLeft,
  ChevronRight,
  Figma,
  Palette,
} from 'lucide-react';
import { motion } from 'motion/react';

const courseData = [
  {
    id: 1,
    title: "Beginner's Guide to Becoming a Professional Front-End Developer",
    category: 'FRONTEND',
    icon: Code,
    mentor: 'Leonardo Samuel',
    mentorImage: '/avatars/memo_35.png',
    progress: 50,
    badgeColor: 'bg-blue-100 text-blue-600',
  },
  {
    id: 2,
    title: 'Optimizing User Experience with the Best UI/UX Design',
    category: 'UI/UX DESIGN',
    icon: Figma,
    mentor: 'Bayu Salto',
    mentorImage: '/avatars/memo_17.png',
    progress: 75,
    badgeColor: 'bg-purple-100 text-purple-600',
  },
  {
    id: 3,
    title: 'Reviving and Refreshing the Company Image',
    category: 'BRANDING',
    icon: Palette,
    mentor: 'Padhang Satrio',
    mentorImage: '/avatars/memo_12.png',
    progress: 30,
    badgeColor: 'bg-pink-100 text-pink-600',
  },
];

export function ContinueWatchingCard() {
  return (
    <motion.div
      className='mb-6'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg lg:text-xl font-semibold font-plus-jakarta-sans'>
          Continue Watching
        </h2>
        <div className='flex gap-2'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant='outline' size='icon' className='rounded-full'>
              <ChevronLeft className='size-4 lg:size-5 text-gray-400' />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant='ghost'
              size='icon'
              className='bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-200'
            >
              <ChevronRight className='size-4 lg:size-5 text-white' />
            </Button>
          </motion.div>
        </div>
      </div>

      <div className='overflow-hidden w-full'>
        <Card className='border-2 border-gray-300/20 rounded-3xl'>
          <CardContent className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4'>
              {courseData.map((course, index) => {
                const IconComponent = course.icon;
                return (
                  <motion.div
                    key={course.id}
                    className='space-y-4'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -4 }}
                  >
                    <div className='relative'>
                      <Image
                        src='/assets/course-image.jpg'
                        alt='Course thumbnail'
                        width={288}
                        height={140}
                        className='w-full h-28 lg:h-36 object-cover rounded-2xl lg:rounded-3xl'
                      />
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          size='icon'
                          className='absolute top-2 right-2 bg-black/20 hover:bg-black/70 rounded-full transition-all duration-200'
                        >
                          <Heart
                            className='w-3 lg:w-4 h-3 lg:h-4 text-white'
                            strokeWidth={3}
                          />
                        </Button>
                      </motion.div>
                    </div>

                    <div className='space-y-3'>
                      <Badge
                        variant='secondary'
                        className={`text-xs rounded-full ${course.badgeColor}`}
                      >
                        <IconComponent className='w-3 h-3 mr-1' />
                        <span>{course.category}</span>
                      </Badge>
                      <h3 className='font-semibold text-sm lg:text-lg line-clamp-2'>
                        {course.title}
                      </h3>
                      <div className='space-y-2'>
                        <Progress value={course.progress} className='h-1' />
                        <div className='flex items-center gap-2'>
                          <Avatar className='w-6 lg:w-8 h-6 lg:h-8 bg-pink-100/90'>
                            <AvatarImage src={course.mentorImage} />
                            <AvatarFallback>
                              {course.mentor
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className='text-xs font-bold text-black/80'>
                              {course.mentor}
                            </p>
                            <p className='text-xs font-semibold text-gray-600'>
                              Mentor
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
