type AdminDashboardProps = {
  onLogout: () => Promise<void>;
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  return (
    <div>
      <h1>Dashboard Admin</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
