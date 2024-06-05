import { useParams } from "react-router-dom";
import useUserSelectedClasses from "../../../hooks/useUserSelectedClasses";


const Payment = () => {

  // class id 
  const {id} = useParams();

  //selected classes get
  const [userSelectedClasses,refetch] = useUserSelectedClasses();

  return (
    <div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas provident ducimus, impedit iusto blanditiis obcaecati cupiditate ad! Sunt cupiditate nesciunt inventore repudiandae dolorem corporis necessitatibus dolor accusantium, debitis magnam eaque deleniti id molestiae harum accusamus aspernatur nostrum tempore fugit, officia, quas delectus amet? Distinctio beatae reprehenderit aperiam numquam veniam eum impedit ea fugiat non reiciendis sint vitae quisquam atque accusantium ex maiores odit, ipsam natus a sunt quidem repellat. Distinctio in labore exercitationem cupiditate tempore quia hic animi fuga vero, vitae rem delectus assumenda, blanditiis eveniet repudiandae eligendi nam laborum repellat illo dolor ex perferendis numquam deleniti. Pariatur consequuntur odio ipsam nulla molestiae qui error accusantium at laboriosam explicabo! Voluptatem optio iure nemo nihil soluta inventore suscipit laborum explicabo! At fugit voluptas reiciendis dicta tempora porro maiores pariatur nisi eos dolores ut dolorum, tenetur asperiores cumque quibusdam maxime? Necessitatibus laudantium aut aliquid possimus? Quasi officiis quod, nostrum voluptate mollitia dolorem rerum. Asperiores doloribus quis modi molestias, harum magnam, possimus, sapiente tenetur explicabo rem odit rerum maxime enim omnis? Ipsum beatae cupiditate ab culpa? Laboriosam nostrum tenetur aut, quos voluptas provident doloribus illum? Porro ipsum tenetur illum ex perspiciatis quod praesentium officia magnam nulla obcaecati, modi ipsam, ratione ducimus dolores sed.</p>
    </div>
  );
};

export default Payment;