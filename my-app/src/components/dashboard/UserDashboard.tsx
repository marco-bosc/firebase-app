type UserDashboardProps = {
  onLogout: () => Promise<void>;
};

const UserDashboard: React.FC<UserDashboardProps> = ({ onLogout }) => {
  return (
    <div>
      <h1>Dashboard Utente</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserDashboard;
