import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel, request } from '@umijs/max';
import styles from './index.less';
import { Button, Rate } from 'antd'

const HomePage: React.FC = () => {
  const { name, setName } = useModel('global');
  const { users, setUsers } = useModel('userList');
  const handleClick = () => {
    setName('new Name')
    setUsers([...users, {id:3, name: 'dabai'}])
    request('/api/v1/user/', { method: 'PUT' }).then((res)=>{
      console.log( res )
    })
  }
  return (
    <PageContainer ghost>
      <div className={styles.container}>
      <Button onClick={handleClick} type="primary">{name}</Button>
      <Rate></Rate>
      { users.map((v)=> <div key={v.id}>{v.name}</div>) }
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
