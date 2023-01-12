import { Appointment } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../react-query/constants';
import { useCustomToast } from '../../app/hooks/useCustomToast';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';


// for when server call is needed
async function removeAppointmentUser(appointment: Appointment): Promise<void> {
  const patchData = [{ op: 'remove', path: '/userId' }];
  await axiosInstance.patch(`/appointment/${appointment.id}`, {
    data: patchData,
  });
}

// TODO: update return type
export function useCancelAppointment(): UseMutateFunction<
  void,
  unknown,
  Appointment,
  unknown
> {
  const queryClient = useQueryClient();
  const toast = useCustomToast();

  const { mutate } = useMutation(
    (appointment: Appointment) => removeAppointmentUser(appointment),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.appointments]);
        toast({
          title: 'you have canceled the appointment!',
          status: 'warning',
        });
      },
    },
  );

  return mutate;
}
