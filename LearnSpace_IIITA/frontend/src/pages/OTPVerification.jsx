// // // src/pages/OTPVerification.jsx
// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Loader2, KeyRound } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';
// import api from '../api/api';

// export default function OTPVerification() {
//   const { state } = useLocation();
//   const email = state?.email;
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   if (!email) {
//     navigate('/admin/login', { replace: true });
//     return null;
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const { data } = await api.post('/verify-otp', { email, otp });
//       login(data.token);
//       navigate('/adminhome', { replace: true });
//     } catch (err) {
//       setError(err.response?.data?.error || 'Invalid OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-sm bg-gray-800 p-8 rounded-2xl shadow-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">
//           Enter OTP sent to {email}
//         </h2>
//         {error && (
//           <div className="mb-4 text-red-400 text-center">{error}</div>
//         )}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6 relative">
//             <input
//               type="text"
//               required
//               maxLength={6}
//               placeholder="6-digit OTP"
//               className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <KeyRound
//               className="absolute left-3 top-2.5 text-gray-400"
//               size={18}
//             />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50 flex items-center justify-center"
//           >
//             {loading ? <Loader2 className="animate-spin" size={18} /> : 'Verify OTP'}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }


// chaagn

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Loader2, KeyRound } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';
// import api from '../api/api';

// export default function OTPVerification() {
//   const { state } = useLocation();
//   const email = state?.email;
//   const name = state?.name;
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!email || !name) {
//       navigate('/admin/login', { replace: true });
//     }
//   }, [email, name, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       const { data } = await api.post('/verify-otp', { email, otp });
//       // store backend JWT
//       login(data.token, name);
//       navigate('/adminhome', { replace: true });
//     } catch (err) {
//       setError(err.response?.data?.error || 'Invalid OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-sm bg-gray-800 p-8 rounded-2xl shadow-lg"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center text-white">
//           Enter OTP sent to {email}
//         </h2>
//         {error && <div className="mb-4 text-red-400 text-center">{error}</div>}

//         <form onSubmit={handleSubmit}>
//           <div className="mb-6 relative">
//             <input
//               type="text"
//               required
//               maxLength={6}
//               placeholder="6-digit OTP"
//               className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <KeyRound className="absolute left-3 top-2.5 text-gray-400" size={18} />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50 flex items-center justify-center"
//           >
//             {loading ? <Loader2 className="animate-spin" size={18} /> : 'Verify OTP'}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }



// // src/pages/OTPVerification.jsx


// chngadln

// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Loader2, KeyRound } from 'lucide-react';
// import api from '../api/api';
// import { useAuth } from '../context/AuthContext';
// export default function OTPVerification() {
//   const { state } = useLocation(); // { email }
//   const navigate  = useNavigate();
//   const { login }= useAuth();
//   const [otp, setOtp]         = useState('');
//   const [error, setError]     = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!state?.email) navigate('/admin/login', { replace: true });
//   }, [state, navigate]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setError(''); setLoading(true);
//     try {
//       const { data } = await api.post('/verify-otp', {
//         email: state.email,
//         otp,
//       });
//       // data: { token, isMain, name }
//       login(data.token, data.name, data.isMain);
//       navigate(data.isMain ? '/main-admin-home' : '/adminhome', { replace: true });
//     } catch {
//       setError('Invalid or expired OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-sm bg-gray-800 p-8 rounded-lg shadow-lg"
//       >
//         <h2 className="text-2xl font-bold text-center text-white mb-4">
//           Enter OTP sent to {state.email}
//         </h2>
//         {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-6">
//             <input
//               type="text"
//               required
//               maxLength={6}
//               className="w-full pl-10 py-2 rounded bg-gray-700 text-white focus:ring-green-500"
//               placeholder="6‑digit OTP"
//               value={otp}
//               onChange={e => setOtp(e.target.value)}
//             />
//             <KeyRound className="absolute left-3 top-2 text-gray-400" size={18} />
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             type="submit"
//             disabled={loading}
//             className="w-full py-2 bg-green-600 rounded text-white disabled:opacity-50"
//           >
//             {loading ? <Loader2 className="animate-spin" /> : 'Verify & Login'}
//           </motion.button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, KeyRound } from 'lucide-react';
import api from '../api/api';
import { useAuth } from '../context/AuthContext';

export default function OTPVerification() {
  const { state } = useLocation(); // { email }
  const navigate = useNavigate();
  const { login } = useAuth();
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state?.email) navigate('/admin/login', { replace: true });
  }, [state, navigate]);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { data } = await api.post('/verify-otp', {
        email: state.email,
        otp,
      });
      // data: { token, isMain, name }
      login(data.token, data.name, data.isMain);
      navigate(data.isMain ? '/main-admin-home' : '/adminhome', { replace: true });
    } catch {
      setError('Invalid or expired OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/otp_ver.jpg')",
        backgroundAttachment: 'fixed',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-sm bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-white mb-4">
          Enter OTP sent to {state.email}
        </h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <input
              type="text"
              required
              maxLength={6}
              className="w-full pl-10 py-2 rounded bg-gray-700 text-white focus:ring-green-500"
              placeholder="6‑digit OTP"
              value={otp}
              onChange={e => setOtp(e.target.value)}
            />
            <KeyRound className="absolute left-3 top-2 text-gray-400" size={18} />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-green-600 rounded text-white disabled:opacity-50 flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Verify & Login'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
