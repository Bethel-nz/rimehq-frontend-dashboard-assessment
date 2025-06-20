'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Play, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export function Banner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Card className='mb-6 bg-gradient-to-r from-banner to-banner/80 border-0 text-white rounded-4xl font-plus-jakarta-sans overflow-hidden relative'>
        <motion.div
          className='absolute inset-0 pointer-events-none z-0'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className='absolute top-4 right-4 lg:top-6 lg:right-6 w-12 lg:w-16 h-12 lg:h-16 bg-white/8 rounded-xl flex items-center justify-center backdrop-blur-sm'
            animate={{
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className='w-6 lg:w-8 h-6 lg:h-8 bg-white/15 rounded-lg flex items-center justify-center'
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <Play className='w-3 lg:w-4 h-3 lg:h-4 text-white/80' />
            </motion.div>
          </motion.div>

          <motion.div
            className='absolute top-16 right-16 lg:top-20 lg:right-20 w-6 h-6 bg-white/12 rounded-lg flex items-center justify-center backdrop-blur-sm'
            animate={{
              y: [0, -6, 0],
              x: [0, 3, 0],
              rotate: [0, 45, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          >
            <Star className='w-3 h-3 text-white/70' />
          </motion.div>

          <motion.div
            className='absolute bottom-4 right-8 lg:bottom-8 lg:right-12 w-4 h-4 bg-white/15 rounded-lg flex items-center justify-center backdrop-blur-sm'
            animate={{
              y: [0, -4, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <Zap className='w-2 h-2 text-white/80' />
          </motion.div>

          <motion.div
            className='absolute top-8 right-28 lg:top-12 lg:right-32 w-2 h-2 bg-white/20 rounded-full'
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
            }}
          />

          <motion.div
            className='absolute bottom-12 right-2 lg:bottom-16 lg:right-4 w-3 h-3 bg-white/10 rounded-md'
            animate={{
              y: [0, -5, 0],
              x: [0, 2, 0],
              rotate: [0, -30, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />

          {/* Large background circles */}
          <motion.div
            className='absolute top-10 left-10 w-20 h-20 bg-white/3 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className='absolute bottom-8 right-20 w-16 h-16 bg-white/2 rounded-full'
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.02, 0.04, 0.02],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
          />
        </motion.div>

        <CardContent className='px-4 lg:px-6 py-6 lg:py-8 space-y-4 lg:space-y-6 font-semibold relative z-10'>
          <motion.div
            className='font-semibold text-white/80 text-sm'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            ONLINE COURSE
          </motion.div>

          <div className='flex flex-col space-y-4 lg:space-y-6'>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.h1
                className='text-2xl lg:text-4xl mb-2 leading-tight'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sharpen Your Skills with
              </motion.h1>
              <motion.h1
                className='text-2xl lg:text-4xl mb-4 lg:mb-6 leading-tight'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Professional Online Courses
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className='bg-black rounded-full px-4 lg:px-6 py-3 flex items-center justify-between gap-2 h-10 lg:h-12 text-white hover:bg-gray-800 transition-all duration-300 group'>
                  <span className='text-sm lg:text-md'>Join Now</span>
                  <motion.span
                    className='flex items-center bg-white rounded-full p-1.5 lg:p-2 ml-2 lg:ml-4'
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronRight
                      className='size-3 lg:size-4 text-black font-bold'
                      strokeWidth={3}
                    />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Desktop-only large animated elements */}
            <motion.div
              className='hidden lg:block absolute top-4 right-4 w-48 h-40'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className='absolute top-6 left-6 w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm'
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 3, -3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <motion.div
                  className='w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center'
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                >
                  <Play className='w-5 h-5 text-white/80' />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
