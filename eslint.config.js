import { configCommon } from '@kirick/lint/eslint/common';
import { configNode } from '@kirick/lint/eslint/node';
import { defineConfig } from 'eslint/config';

export default defineConfig([...configCommon, ...configNode]);
