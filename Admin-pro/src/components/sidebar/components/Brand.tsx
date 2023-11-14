// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '../../../assets/img/dashboards/logo.png';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand(props: { mini: boolean; hovered: boolean }) {
  const { mini, hovered } = props;
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
      <div className={`mx-[40px] mt-[40px] flex items-center`}>
        <div className="font-poppins text-navy-700 mb-5 ml-1 mt-1 h-2.5 text-[26px] font-bold uppercase dark:text-white">
          <img className="w-32 pb-2" src={Logo} />
        </div>
      </div>
      {/* <HorizonLogo
        h="26px"
        w="175px"
        my="32px"
        color={logoColor}
        display={
          mini === false
            ? 'block'
            : mini === true && hovered === true
            ? 'block'
            : 'none'
        }
      /> */}

      <Text
        display={
          mini === false
            ? 'none'
            : mini === true && hovered === true
            ? 'none'
            : 'block'
        }
        fontSize={'30px'}
        fontWeight="800"
        color={logoColor}
      >
        H
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
