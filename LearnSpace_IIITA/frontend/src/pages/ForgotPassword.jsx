// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Loader2 } from 'lucide-react';
// import api from '../api/api';
// import bgImage from './forget.jpg';

// export default function ForgotPassword() {
//   const [step, setStep] = useState(1);
//   const [data, setData] = useState({ email: '', otp: '', newPassword: '' });
//   const [error, setError] = useState('');
//   const [message, setMessage] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       if (step === 1) {
//         await api.post('/reset-password', { email: data.email });
//         setStep(2);
//       } else {
//         await api.post('/reset-password-confirm', {
//           email: data.email,
//           otp: data.otp,
//           newPassword: data.newPassword,
//         });
//         setMessage('Password updated! Redirecting to login…');
//         setTimeout(() => navigate('/admin/login'), 2000);
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'Operation failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <img src={bgImage} className="absolute inset-0 w-full h-full object-cover" />
//       <div className="absolute inset-0 bg-black bg-opacity-60" />
//       <div className="relative flex items-center justify-center h-full px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-white">
//               {step === 1 ? 'Forgot Password' : 'Enter OTP & New Password'}
//             </h2>

//             {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
//             {message && <div className="mb-4 text-green-400 text-center">{message}</div>}

//             <form onSubmit={submit}>
//               {step === 1 ? (
//                 <input
//                   type="email"
//                   required
//                   placeholder="Your registered email"
//                   className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   value={data.email}
//                   onChange={(e) => setData({ ...data, email: e.target.value })}
//                 />
//               ) : (
//                 <>
//                   <input
//                     type="text"
//                     required
//                     maxLength={6}
//                     placeholder="OTP"
//                     className="w-full mb-4 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     value={data.otp}
//                     onChange={(e) => setData({ ...data, otp: e.target.value })}
//                   />
//                   <input
//                     type="password"
//                     required
//                     placeholder="New password"
//                     className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     value={data.newPassword}
//                     onChange={(e) => setData({ ...data, newPassword: e.target.value })}
//                   />
//                 </>
//               )}

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50 flex items-center justify-center"
//               >
//                 {loading ? (
//                   <Loader2 className="animate-spin" size={18} />
//                 ) : step === 1 ? (
//                   'Send OTP'
//                 ) : (
//                   'Reset Password'
//                 )}
//               </motion.button>
//             </form>

//             <div className="mt-4 text-center">
//               <button
//                 onClick={() => navigate('/admin/login')}
//                 className="text-green-400 hover:underline text-sm"
//               >
//                 Back to Login
//               </button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2, Check, X } from 'lucide-react';
import api from '../api/api';
import bgImage from './forget.jpg';

export default function ForgotPassword() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ email: '', otp: '', newPassword: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isStrong, setIsStrong] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (step === 1) {
        await api.post('/reset-password', { email: data.email });
        setStep(2);
      } else {
        if (!isStrong) {
          setError('Password is not strong enough.');
          return;
        }
        await api.post('/reset-password-confirm', {
          email: data.email,
          otp: data.otp,
          newPassword: data.newPassword,
        });
        setMessage('Password updated! Redirecting to login…');
        setTimeout(() => navigate('/admin/login'), 2000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img src={bgImage} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative flex items-center justify-center h-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              {step === 1 ? 'Forgot Password' : 'Enter OTP & New Password'}
            </h2>

            {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
            {message && <div className="mb-4 text-green-400 text-center">{message}</div>}

            <form onSubmit={submit}>
              {step === 1 ? (
                <input
                  type="email"
                  required
                  placeholder="Your registered email"
                  className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              ) : (
                <>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="OTP"
                    className="w-full mb-4 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={data.otp}
                    onChange={(e) => setData({ ...data, otp: e.target.value })}
                  />
                  <input
                    type="password"
                    required
                    placeholder="New password"
                    className="w-full mb-2 px-3 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={data.newPassword}
                    onChange={(e) => setData({ ...data, newPassword: e.target.value })}
                  />
                  <PasswordStrengthMeter
                    password={data.newPassword}
                    onStrengthChange={setIsStrong}
                  />
                </>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading || (step === 2 && !isStrong)}
                className="w-full mt-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : step === 1 ? (
                  'Send OTP'
                ) : (
                  'Reset Password'
                )}
              </motion.button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/admin/login')}
                className="text-green-400 hover:underline text-sm"
              >
                Back to Login
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PasswordCriteria = ({ password, onStrengthChange }) => {
  const criteria = [
    { label: 'At least 6 characters', met: password.length >= 6 },
    { label: 'Contains uppercase letter', met: /[A-Z]/.test(password) },
    { label: 'Contains lowercase letter', met: /[a-z]/.test(password) },
    { label: 'Contains a number', met: /\d/.test(password) },
    { label: 'Contains special character', met: /[^A-Za-z0-9]/.test(password) },
  ];

  const allCriteriaMet = criteria.every((item) => item.met);

  useEffect(() => {
    onStrengthChange(allCriteriaMet);
  }, [allCriteriaMet, onStrengthChange]);

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-xs">
          {item.met ? (
            <Check className="size-4 text-green-500 mr-2" />
          ) : (
            <X className="size-4 text-gray-500 mr-2" />
          )}
          <span className={item.met ? 'text-green-500' : 'text-gray-400'}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password, onStrengthChange }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[^a-zA-Z\d]/.test(pass)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (s) => {
    if (s === 0) return 'bg-red-500';
    if (s === 1) return 'bg-red-400';
    if (s === 2) return 'bg-yellow-500';
    if (s === 3) return 'bg-yellow-400';
    return 'bg-green-500';
  };

  const getStrengthText = (s) => {
    if (s === 0) return 'Very Weak';
    if (s === 1) return 'Weak';
    if (s === 2) return 'Fair';
    if (s === 3) return 'Good';
    return 'Strong';
  };

  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-gray-400">Password strength</span>
        <span className="text-xs text-gray-400">{getStrengthText(strength)}</span>
      </div>
      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
            ${index < strength ? getColor(strength) : 'bg-gray-600'}`}
          />
        ))}
      </div>
      <PasswordCriteria password={password} onStrengthChange={onStrengthChange} />
    </div>
  );
};
