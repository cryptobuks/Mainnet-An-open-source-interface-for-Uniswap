import cn from 'classnames';
import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { useLayout } from '../../hooks/use-layout';
import { LAYOUT_OPTIONS } from '../../lib/constants';
import AD from '../../assets/images/ad/latest-release.png';



interface Props {
  chartWrapperClass?: string;
}

export default function OverviewChart({ chartWrapperClass }: Props) {
  const { layout } = useLayout();

  return (
    <div>

      <div className='flex flex-col-reverse'>

        <div>
          <img
            src={AD}
            placeholder="blur"
            alt="Pulses of Imagination #214"
          />
        </div>


        <div>
          <img
            src={AD}
            placeholder="blur"
            alt="Pulses of Imagination #214"
          />
        </div>

      </div>

    </div>
  );
}
