import { FC } from 'react';
import { Basketball, Dumbbell, IIconProps, Running, Swimming, Walking, Yoga } from 'shared/components/icons/icons';

export const ActivityIcon: { [key: string]: FC<IIconProps> } = {
	Walking: Walking,
	Running: Running,
	Dumbbell: Dumbbell,
	Swimming: Swimming,
	Basketball: Basketball,
	Yoga: Yoga
};
