import { type BaseSchema } from 'valibot';
export type ValiBaseSchema = BaseSchema<any, any, any>;
export type ApiResponse<DR, DE = never> = {
    success: true;
    data: DR;
} | {
    success: false;
    code: number;
    description?: string;
    data: DE;
};
