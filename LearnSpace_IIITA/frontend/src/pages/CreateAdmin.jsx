// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Loader2, User, Mail, Lock } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import api from '../api/api';

// export default function CreateAdmin() {
//   const [step, setStep] = useState(1);
//   const [form, setForm] = useState({ name: '', email: '', password: '' });
//   const [otp, setOtp] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setLoading(true);
//     try {
//       if (step === 1) {
//         await api.post('/request-admin', form);
//         setStep(2);
//       } else {
//         await api.post('/verify-admin', { email: form.email, otp });
//         navigate('/admin/login', { replace: true });
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || 'Operation failed');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden">
//       <img
//         src="/raman.jpg"
//         className="absolute inset-0 w-full h-full object-cover"
//         alt="Background"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-60" />
//       <div className="relative flex items-center justify-center h-full px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
//         >
//           <div className="p-8">
//             <h2 className="text-3xl font-bold mb-6 text-center text-white">
//               {step === 1 ? 'Create Admin Account' : 'Enter Main Admin OTP'}
//             </h2>
//             {error && <div className="mb-4 text-red-400 text-center">{error}</div>}
//             <form onSubmit={handleSubmit}>
//               {step === 1 ? (
//                 <>
//                   {['name', 'email', 'password'].map((field) => {
//                     const Icon = field === 'name' ? User : field === 'email' ? Mail : Lock;
//                     return (
//                       <div key={field} className="mb-4 relative">
//                         <input
//                           type={field === 'password' ? 'password' : 'text'}
//                           required
//                           placeholder={field[0].toUpperCase() + field.slice(1)}
//                           className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                           value={form[field]}
//                           onChange={(e) =>
//                             setForm({ ...form, [field]: e.target.value })
//                           }
//                         />
//                         <Icon className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                       </div>
//                     );
//                   })}
//                 </>
//               ) : (
//                 <div className="mb-6 relative">
//                   <input
//                     type="text"
//                     required
//                     maxLength={6}
//                     placeholder="OTP"
//                     className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />
//                   <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
//                 </div>
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
//                   'Send Request to Main Admin'
//                 ) : (
//                   'Verify & Create'
//                 )}
//               </motion.button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, User, Mail, Lock, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import PasswordStrengthMeter from '../components/PasswordStrengthMeter';

export default function CreateAdmin() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (step === 1) {
        if (!validateEmail(form.email)) {
          setError('Please enter a valid email address.');
          setLoading(false);
          return;
        }

        if (!isPasswordStrong) {
          setError('Please choose a stronger password.');
          setLoading(false);
          return;
        }

        await api.post('/request-admin', form);
        setStep(2);
      } else {
        await api.post('/verify-admin', { email: form.email, otp });
        navigate('/admin/login', { replace: true });
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <img
        src="/createadminback.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
      {/* Removed the dark overlay div here */}
      <div className="relative flex flex-col items-center justify-center h-full px-4">
        {/* Container for card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              {step === 1 ? 'Create Admin Account' : 'Enter Main Admin OTP'}
            </h2>

            {error && <div className="mb-4 text-red-400 text-center">{error}</div>}

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <>
                  {['name', 'email', 'password'].map((field) => {
                    const Icon = field === 'name' ? User : field === 'email' ? Mail : Lock;
                    return (
                      <div key={field} className="mb-4 relative">
                        <input
                          type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                          required
                          placeholder={field[0].toUpperCase() + field.slice(1)}
                          className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                          value={form[field]}
                          onChange={(e) =>
                            setForm({ ...form, [field]: e.target.value })
                          }
                        />
                        <Icon className="absolute left-3 top-2.5 text-gray-400" size={18} />
                      </div>
                    );
                  })}

                  <PasswordStrengthMeter
                    password={form.password}
                    onStrengthChange={setIsPasswordStrong}
                  />
                </>
              ) : (
                <div className="mb-6 relative">
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="OTP"
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
                </div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-2 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-md disabled:opacity-50 flex items-center justify-center"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : step === 1 ? (
                  'Send Request to Main Admin'
                ) : (
                  'Verify & Create'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Back to Login with arrow */}
        <button
          onClick={() => navigate('/admin/login')}
          className="mt-4 flex items-center space-x-2 text-green-400 hover:underline text-sm"
          type="button"
        >
          <ArrowLeft size={16} />
          <span>Back to Login</span>
        </button>
      </div>
    </div>
  );
}
