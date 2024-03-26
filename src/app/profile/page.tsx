import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/src/libs/getUserProfile';
export default async function profilePage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = await getUserProfile(session.user.token);
  var createdAt = new Date(profile.data.createdAt);
 
  return (
    // className="bg-slate-100  p-auto w-1/2 m-auto mt-20"
    <main className='w-full h-full mx-auto'>
      {/* <div className="text-center text-4xl">{profile.data.name}</div>
      <table className="table-auto border-separate border-spacing-2">
        <tbody>
          <tr>
            <td className='text-2xl'>Email : </td>
            <td>{profile.data.email}</td>
          </tr>
          <tr>
            <td className='text-2xl'>Tel : </td>
            <td>{profile.data.tel}</td>
          </tr>
          <tr>
            <td className='text-2xl'>Member Since : </td>
            <td>{createdAt.toString()}</td>
          </tr>
        </tbody>
      </table> */}
            <div className=" mx-auto my-20 card w-96 glass">
        <figure><img src={"/img/profile.png"} alt="car!"/></figure>
        <div className="card-body w-full">
          <h2 className="card-title">Your Profile</h2>
          <p className=' ml-0'>Email : {profile.data.email}</p>
          <p>Tel : {profile.data.tel}</p>
          <p>Member Since : {createdAt.toString()}</p>
          
        </div>
      </div>
    </main>
  );
}
