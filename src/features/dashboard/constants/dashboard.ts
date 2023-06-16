import { FC } from 'react';
import {
	Basketball,
	Cycling,
	Dumbbell,
	IIconProps,
	Running,
	Soccer,
	Swimming,
	Walking,
	Yoga
} from 'shared/components/icons/icons';

export const ActivityIconList: { [key: string]: FC<IIconProps> } = {
	Walking: Walking,
	Running: Running,
	'Strength Training': Dumbbell,
	Swimming: Swimming,
	Basketball: Basketball,
	Yoga: Yoga,
	Cycling: Cycling,
	Soccer: Soccer
};
