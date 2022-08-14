import { AuthLayout, DashboardLayout } from "../components";

import Dashboard from "../pages/admin/Dashboard";
import HistoryTrading from "../pages/admin/HistoryTrading";
import JadwalShift from "../pages/admin/JadwalShift";
import News from "../pages/admin/News";
import ProfitTrading from "../pages/admin/ProfitTrading";
import SOPTrader from "../pages/admin/SOPTrader";
import WithdrawProfitTrading from "../pages/admin/WithdrawProfitTrading";
import CoinForm from "../pages/admin/CoinForm";
import MasterPair from "../pages/admin/MasterPair";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Forgot from "../pages/auth/Forgot";
import MasterTrader from "../pages/admin/MasterTrader";

const authRoutes = [
  { path: "/auth/login", component: Login, layout: AuthLayout },
  { path: "/auth/register", component: Register, layout: AuthLayout },
  { path: "/auth/forgot-password", component: Forgot, layout: AuthLayout },
];
const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard, layout: DashboardLayout },
  {
    path: "/admin/history-trading",
    component: HistoryTrading,
    layout: DashboardLayout,
  },
  {
    path: "/admin/jadwal-shift",
    component: JadwalShift,
    layout: DashboardLayout,
  },
  { path: "/admin/news", component: News, layout: DashboardLayout },
  {
    path: "/admin/profit-trading",
    component: ProfitTrading,
    layout: DashboardLayout,
  },
  { path: "/admin/sop-trader", component: SOPTrader, layout: DashboardLayout },
  {
    path: "/admin/withdraw-profit-trader",
    component: WithdrawProfitTrading,
    layout: DashboardLayout,
  },
  {
    path: "/admin/coin-form/:currency_id",
    component: CoinForm,
    layout: DashboardLayout,
  },
  {
    path: "/admin/master-pair",
    component: MasterPair,
    layout: DashboardLayout,
  },
  {
    path: "/admin/master-trader",
    component: MasterTrader,
    layout: DashboardLayout,
  },
];

export { authRoutes, adminRoutes };
