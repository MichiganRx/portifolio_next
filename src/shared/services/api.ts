import axios from 'axios';

import { publicEnvs } from '../helpers/public-envs';

export const api = axios.create({
  baseURL: publicEnvs.NEXT_PUBLIC_API_BASE_URL,
});
