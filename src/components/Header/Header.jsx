import {View, Text} from 'react-native';
import styles from './Style';


const Header = ({title = ''}) => {
  return (
    <View style={styles.headerWrapper}>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
