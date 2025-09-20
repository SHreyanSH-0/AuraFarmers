import React, { useState } from 'react';
import { Heart, MessageCircle, Share, Camera, MapPin, Clock, Users } from 'lucide-react';

interface CommunityPost {
  id: string;
  author: string;
  location: string;
  timeAgo: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  mission?: string;
  achievement?: string;
}

const Community: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'achievements' | 'discussions'>('feed');

  const posts: CommunityPost[] = [
    {
      id: '1',
      author: 'Priya Sharma',
      location: 'Nashik, Maharashtra',
      timeAgo: '2 hours ago',
      content: 'Just completed my drip irrigation setup! Water usage has reduced by 40% and my tomatoes are thriving. Thanks to the community tips!',
      image: 'https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 24,
      comments: 8,
      mission: 'Water Conservation Mission',
    },
    {
      id: '2',
      author: 'Amit Patel',
      location: 'Anand, Gujarat',
      timeAgo: '5 hours ago',
      content: 'Earned my Soil Guardian badge today! Organic composting has improved my soil pH significantly. The difference in crop quality is amazing.',
      likes: 18,
      comments: 12,
      achievement: 'Soil Guardian',
    },
    {
      id: '3',
      author: 'Sunita Devi',
      location: 'Jaipur, Rajasthan',
      timeAgo: '1 day ago',
      content: 'Intercropping with legumes has been a game changer! My cotton yield increased by 25% and soil nitrogen levels are much better.',
      image: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 32,
      comments: 15,
      mission: 'Crop Diversification Quest',
    },
  ];

  const achievements = [
    {
      farmer: 'Rajesh Kumar',
      location: 'Kurnool, AP',
      achievement: 'Organic Pioneer',
      timeAgo: '1 hour ago',
    },
    {
      farmer: 'Maya Singh',
      location: 'Punjab',
      achievement: 'Water Warrior',
      timeAgo: '3 hours ago',
    },
    {
      farmer: 'Kiran Reddy',
      location: 'Telangana',
      achievement: 'Biodiversity Champion',
      timeAgo: '6 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Community Hub</h1>
        <p className="text-gray-600">Connect, share, and learn from fellow sustainable farmers</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Farmers</p>
              <p className="text-2xl font-bold text-green-600">1,247</p>
            </div>
            <Users className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Posts This Week</p>
              <p className="text-2xl font-bold text-green-600">342</p>
            </div>
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Success Stories</p>
              <p className="text-2xl font-bold text-green-600">89</p>
            </div>
            <Heart className="h-8 w-8 text-green-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-green-100">
        <div className="flex border-b border-gray-100">
          {[
            { key: 'feed', label: 'Community Feed' },
            { key: 'achievements', label: 'Recent Achievements' },
            { key: 'discussions', label: 'Discussions' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab.key
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'feed' && (
            <div className="space-y-6">
              {/* Create Post */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    RK
                  </div>
                  <input
                    type="text"
                    placeholder="Share your farming success story..."
                    className="flex-1 bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <Camera className="h-4 w-4" />
                    <span>Photo</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-green-600">
                    <MapPin className="h-4 w-4" />
                    <span>Location</span>
                  </button>
                </div>
              </div>

              {/* Posts */}
              {posts.map((post) => (
                <div key={post.id} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{post.author}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{post.location}</span>
                          </div>
                          <span>•</span>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.timeAgo}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {post.mission && (
                    <div className="mb-3 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      🎯 {post.mission}
                    </div>
                  )}

                  {post.achievement && (
                    <div className="mb-3 inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                      🏆 {post.achievement}
                    </div>
                  )}

                  <p className="text-gray-700 mb-4">{post.content}</p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <button className="text-gray-600 hover:text-green-500 transition-colors">
                      <Share className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Recent Community Achievements</h3>
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-2xl">
                      🏆
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{achievement.farmer}</h4>
                      <p className="text-sm text-gray-600">
                        Earned "{achievement.achievement}" badge • {achievement.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{achievement.timeAgo}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'discussions' && (
            <div className="space-y-6">
              <div className="text-center py-8">
                <MessageCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Start a Discussion</h3>
                <p className="text-gray-600 mb-4">
                  Ask questions, share tips, or discuss sustainable farming practices with the community.
                </p>
                <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Start Discussion
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;