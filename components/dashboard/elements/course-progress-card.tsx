'use client';
import { Card, CardContent } from '@/components/ui/card';
import { MoreVertical, Figma, Tag, Code, LucideIcon } from 'lucide-react';
import { motion } from 'motion/react';

interface CourseProgressCardProps {
  title: string;
  watched: number;
  total: number;
  icon: 'figma' | 'tag' | 'code';
  colorScheme: 'purple' | 'pink' | 'blue';
}

const iconMap: Record<string, LucideIcon> = {
  figma: Figma,
  tag: Tag,
  code: Code,
};

const colorMap = {
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
  },
  pink: {
    bg: 'bg-pink-100',
    text: 'text-pink-600',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
};

export function CourseProgressCard({
  title,
  watched,
  total,
  icon,
  colorScheme,
}: CourseProgressCardProps) {
  const IconComponent = iconMap[icon];
  const colors = colorMap[colorScheme];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className='hover:shadow-lg transition-all duration-300 cursor-pointer p-4 h-fit border-2 border-gray-100'>
        <CardContent className='px-2 py-1'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <motion.div
                className={`size-10 lg:size-12 ${colors.bg} rounded-lg flex items-center justify-center`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <IconComponent className={`size-5 lg:size-6 ${colors.text}`} />
              </motion.div>
              <div>
                <div className='flex items-center gap-2 mb-1'>
                  <p className='text-xs text-gray-500'>
                    {watched}/{total} watched
                  </p>
                </div>
                <p className='font-semibold text-sm lg:text-base'>{title}</p>
              </div>
            </div>
            <motion.div
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgba(243, 244, 246, 1)',
              }}
              whileTap={{ scale: 0.9 }}
              className='p-1 rounded-full transition-colors duration-200'
            >
              <MoreVertical className='size-5 lg:size-6 text-gray-400' />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
