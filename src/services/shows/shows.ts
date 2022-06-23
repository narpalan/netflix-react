import axiosInstance from '../../modules/axios/axios';
import { GetShowsPayload } from './shows.type';

const showService = () => {
  const show = (payload: GetShowsPayload) => axiosInstance.get('/shows', payload);
  return {
    show,
  };
};

export default showService;
