// src/controllers/userController.js
export const getProfile = async (req, res) => {
  try {
    const user = req.user; // Comes from auth middleware

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user profile' });
  }
};


