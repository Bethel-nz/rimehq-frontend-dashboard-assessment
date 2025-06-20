'use client';

import { Plus, UserCheck, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from 'recharts';
import { motion } from 'framer-motion';

const chartData = [
  { period: '1-10 Aug', value: 30 },
  { period: '11-20 Aug', value: 45 },
  { period: '21-30 Aug', value: 35 },
  { period: '31-40 Aug', value: 60 },
  { period: '41 Aug', value: 25 },
];

const chartConfig = {
  value: {
    label: 'Progress',
    color: 'hsl(var(--chart-1))',
  },
};

// Mentor data type
interface Mentor {
  id: string;
  name: string;
  avatar: string;
  role: string;
  isOnline: boolean;
  isFollowing?: boolean;
}

// Mentor data
const mentorData: Mentor[] = [
  {
    id: '1',
    name: 'Padhang Satrio',
    avatar: '/avatars/memo_12.png',
    role: 'Mentor',
    isOnline: true,
    isFollowing: false,
  },
  {
    id: '2',
    name: 'Zakir Horizontal',
    avatar: '/avatars/memo_35.png',
    role: 'Mentor',
    isOnline: true,
    isFollowing: false,
  },
  {
    id: '3',
    name: 'Leonardo Samuel',
    avatar: '/avatars/memo_17.png',
    role: 'Mentor',
    isOnline: true,
    isFollowing: false,
  },
];

// Avatar background colors for each mentor
const avatarColors = ['bg-orange-100', 'bg-blue-100', 'bg-green-100'];

// Reusable MentorItem component
interface MentorItemProps {
  mentor: Mentor;
  index: number;
}

function MentorItem({ mentor, index }: MentorItemProps) {
  return (
    <motion.div
      className='flex items-center justify-between'
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
    >
      <div className='flex items-center gap-3'>
        <div className='relative'>
          <Avatar className={`w-8 lg:w-10 h-8 lg:h-10 ${avatarColors[index]}`}>
            <AvatarImage src={mentor.avatar} />
            <AvatarFallback className={`${avatarColors[index]} font-semibold`}>
              {mentor.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          {mentor.isOnline && (
            <div className='absolute -bottom-1 -right-1 w-3 lg:w-4 h-3 lg:h-4 bg-black rounded-full border-2 border-white flex items-center justify-center'>
              <div className='size-[0.2rem] lg:size-[0.3rem] bg-white rounded-full'></div>
            </div>
          )}
        </div>
        <div>
          <p className='font-medium text-xs lg:text-sm text-gray-900'>
            {mentor.name}
          </p>
          <p className='text-xs text-gray-500'>{mentor.role}</p>
        </div>
      </div>
      <Button
        size='sm'
        variant='outline'
        className='text-xs h-6 lg:h-7 px-2 rounded-full border-purple-200 text-purple-600 hover:bg-purple-50'
      >
        <>
          <UserCheck className='w-3 h-3 mr-1' />
          <span className='hidden sm:inline'>Follow</span>
        </>
      </Button>
    </motion.div>
  );
}

export function StatisticsCard() {
  const progressPercentage = 32;

  return (
    <motion.div
      className='w-full'
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className='border-2 border-gray-300/20 rounded-3xl w-full'>
        <CardHeader className='pb-4'>
          <div className='flex items-center justify-between'>
            <h3 className='font-semibold text-gray-900'>Statistic</h3>
            <MoreVertical className='w-4 h-4 text-gray-400' />
          </div>
        </CardHeader>
        <CardContent className='pt-0 px-3 lg:px-6'>
          <div className='text-center mb-6'>
            <div className='relative size-24 lg:size-32 mx-auto mb-3'>
              <svg
                className='size-24 lg:size-32 transform -rotate-90'
                viewBox='0 0 80 80'
              >
                <circle
                  cx='40'
                  cy='40'
                  r='36'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  className='text-gray-200'
                />
                <motion.circle
                  cx='40'
                  cy='40'
                  r='36'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeDasharray={`${2 * Math.PI * 36}`}
                  className='text-purple-600'
                  strokeLinecap='round'
                  initial={{ strokeDashoffset: 2 * Math.PI * 36 }}
                  animate={{
                    strokeDashoffset:
                      2 * Math.PI * 36 * (1 - progressPercentage / 100),
                  }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />
              </svg>

              <div className='absolute inset-2 flex items-center justify-center'>
                <Avatar className='size-16 lg:size-24'>
                  <AvatarImage src='/avatars/user-avatar.png' />
                  <AvatarFallback className='bg-orange-100 text-orange-600 font-semibold text-sm lg:text-lg'>
                    JR
                  </AvatarFallback>
                </Avatar>
              </div>

              <motion.div
                className='absolute -top-1 -right-1 w-8 lg:w-10 h-5 lg:h-6 bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs lg:text-sm font-bold shadow-sm'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2 }}
                >
                  {progressPercentage}%
                </motion.span>
              </motion.div>
            </div>
            <h4 className='font-semibold text-gray-900 mb-1 text-sm lg:text-base'>
              Good Morning Jason 🔥
            </h4>
            <p className='text-xs text-gray-500 px-2 lg:px-4 leading-relaxed'>
              Consistency is the key to achieving your target
            </p>
          </div>

          <div className='h-24 lg:h-32 mb-6'>
            <ChartContainer config={chartConfig} className='h-full w-full'>
              <div className='bg-blue-50/50 rounded-lg p-1 h-full'>
                <ResponsiveContainer width='100%' height='100%'>
                  <BarChart
                    data={chartData}
                    margin={{ top: 10, right: 10, left: 20, bottom: 0 }}
                    barCategoryGap='10%'
                  >
                    <XAxis
                      dataKey='period'
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 8, fill: '#9CA3AF' }}
                      interval={0}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 8, fill: '#9CA3AF' }}
                      domain={[0, 60]}
                      ticks={[20, 40, 60]}
                      orientation='left'
                      width={15}
                    />
                    <CartesianGrid
                      strokeDasharray='3 3'
                      stroke='#e5e7eb'
                      horizontal={true}
                      vertical={false}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey='value' radius={[4, 4, 0, 0]} maxBarSize={30}>
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={index % 2 === 0 ? '#a78bfa' : '#8b5cf6'}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </ChartContainer>
          </div>

          <div className='rounded-xl space-y-4 mt-8 lg:mt-12'>
            <div className='flex items-center justify-between mb-4'>
              <h3 className='font-semibold text-gray-900 text-sm lg:text-base'>
                Your mentor
              </h3>
              <Button
                size='icon'
                variant='outline'
                className='w-6 lg:w-8 h-6 lg:h-8 border-gray-200 rounded-full text-purple-600'
              >
                <Plus className='w-3 h-3' />
              </Button>
            </div>

            <div className='bg-blue-50/50 rounded-xl py-3 lg:py-4 px-2 space-y-3 lg:space-y-4'>
              {mentorData.map((mentor, index) => (
                <div key={mentor.id}>
                  <MentorItem mentor={mentor} index={index} />
                  {index < mentorData.length - 1 && (
                    <div className='w-full h-px border-t border-dashed border-gray-300 my-2 lg:my-3' />
                  )}
                </div>
              ))}
            </div>

            <div className='pt-2'>
              <Button
                variant='link'
                className='w-full text-purple-600 text-sm font-medium h-8'
              >
                See All
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
