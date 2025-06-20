'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

import { Banner } from './elements/banner';
import { CourseProgressCard } from './elements/course-progress-card';
import { ContinueWatchingCard } from './elements/continue-watching-card';
import { Sidebar } from './elements/sidebar';
import { StatisticsCard } from './elements/statistics-card';
import { Header } from './elements/header';
import { LessonsTable } from './elements/lessons-table';

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50 overflow-x-hidden'>
      <motion.div
        className='lg:hidden fixed top-4 z-50'
        initial={{ opacity: 0, scale: 0, left: 16 }}
        animate={{
          opacity: 1,
          scale: 1,
          left: isMobileMenuOpen ? 240 : 16,
        }}
        transition={{
          duration: 0.3,
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant='outline'
            size='icon'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='bg-white/95 backdrop-blur-sm border-gray-200 shadow-lg rounded-full size-12'
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5 text-gray-700' />
              ) : (
                <Menu className='w-5 h-5 text-gray-700' />
              )}
            </motion.div>
          </Button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className='lg:hidden fixed inset-0 z-40 bg-black/50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className='absolute left-0 top-0 h-full'
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='hidden lg:block'>
        <Sidebar />
      </div>

      <div className='lg:ml-64 pt-20 lg:pt-0'>
        <Header />

        <div className='flex flex-col xl:flex-row gap-6 px-4 lg:px-6'>
          <div className='flex-1 min-w-0'>
            <Banner />

            <motion.div
              className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mb-8'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CourseProgressCard
                title='UI/UX Design'
                watched={2}
                total={8}
                icon='figma'
                colorScheme='purple'
              />
              <CourseProgressCard
                title='Branding'
                watched={3}
                total={8}
                icon='tag'
                colorScheme='pink'
              />
              <CourseProgressCard
                title='Front End'
                watched={6}
                total={12}
                icon='code'
                colorScheme='blue'
              />
            </motion.div>

            <ContinueWatchingCard />
            <LessonsTable />
          </div>

          <div className='xl:w-80 xl:flex-shrink-0'>
            <StatisticsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
