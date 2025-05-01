import { useQuery } from '@tanstack/react-query';

import { IHookQueryGet } from '@/utils/entities';

import { ConfigApi } from '../../apis';
import { IConfigGetCodesApiArgs, IConfigGetCodesResponse } from '../../entities';

// ----------------------------------------------------------------------

export class ConfigQuery {
  static useGetCodes = (args: IHookQueryGet<IConfigGetCodesApiArgs, IConfigGetCodesResponse>) => {
    return useQuery({
      queryKey: ['ConfigQuery-getCodes', args.props],
      queryFn: () => ConfigApi.getCodes(args.props),
      ...args.options,
    });
  };
}
