
import React, { useState } from 'react';
import { MessageSquare, Send, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';

interface ForumPost {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: 'student' | 'instructor';
  };
  content: string;
  timestamp: string;
  likes: number;
  replies: ForumReply[];
}

interface ForumReply {
  id: number;
  author: {
    name: string;
    avatar: string;
    role: 'student' | 'instructor';
  };
  content: string;
  timestamp: string;
  likes: number;
}

// Sample data for demonstration
const initialPosts: ForumPost[] = [
  {
    id: 1,
    author: {
      name: "Sarah Chen",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      role: "student"
    },
    content: "Can someone explain the difference between useEffect and useLayoutEffect? I'm having trouble understanding when to use each one.",
    timestamp: "2 hours ago",
    likes: 5,
    replies: [
      {
        id: 1,
        author: {
          name: "Dr. Alex Johnson",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          role: "instructor"
        },
        content: "Great question! useEffect runs after the render is committed to the screen, while useLayoutEffect runs synchronously before the browser repaints. Most of the time, you'll want to use useEffect for better performance.",
        timestamp: "1 hour ago",
        likes: 8
      }
    ]
  },
  {
    id: 2,
    author: {
      name: "Mike Thompson",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
      role: "student"
    },
    content: "The project assignment for week 3 was really helpful in understanding state management. Looking forward to learning more about Redux!",
    timestamp: "5 hours ago",
    likes: 3,
    replies: []
  }
];

const ForumDiscussion = () => {
  const [posts, setPosts] = useState<ForumPost[]>(initialPosts);
  const [newPost, setNewPost] = useState('');
  const [replyText, setReplyText] = useState<{ [key: number]: string }>({});
  const [showReplyInput, setShowReplyInput] = useState<{ [key: number]: boolean }>({});

  const handlePostSubmit = () => {
    if (!newPost.trim()) return;
    
    const post: ForumPost = {
      id: posts.length + 1,
      author: {
        name: "Current User",
        avatar: "https://randomuser.me/api/portraits/men/88.jpg",
        role: "student"
      },
      content: newPost,
      timestamp: "Just now",
      likes: 0,
      replies: []
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  const handleReplySubmit = (postId: number) => {
    if (!replyText[postId]?.trim()) return;

    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newReply: ForumReply = {
          id: post.replies.length + 1,
          author: {
            name: "Current User",
            avatar: "https://randomuser.me/api/portraits/men/88.jpg",
            role: "student"
          },
          content: replyText[postId],
          timestamp: "Just now",
          likes: 0
        };
        return {
          ...post,
          replies: [...post.replies, newReply]
        };
      }
      return post;
    }));

    setReplyText({ ...replyText, [postId]: '' });
    setShowReplyInput({ ...showReplyInput, [postId]: false });
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          Discussion Forum
        </h2>
        
        <div className="mb-4">
          <Textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Start a new discussion..."
            className="min-h-[100px]"
          />
          <div className="mt-2 flex justify-end">
            <Button onClick={handlePostSubmit}>
              <Send className="h-4 w-4 mr-2" />
              Post
            </Button>
          </div>
        </div>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow p-4 space-y-4">
              <div className="flex items-start gap-4">
                <Avatar>
                  <img src={post.author.avatar} alt={post.author.name} />
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{post.author.name}</span>
                    <Badge variant={post.author.role === 'instructor' ? 'default' : 'secondary'}>
                      {post.author.role}
                    </Badge>
                    <span className="text-sm text-gray-500">{post.timestamp}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{post.content}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {post.likes}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowReplyInput({ ...showReplyInput, [post.id]: !showReplyInput[post.id] })}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Reply
                    </Button>
                  </div>
                </div>
              </div>

              {/* Replies */}
              <div className="ml-12 space-y-4">
                {post.replies.map((reply) => (
                  <div key={reply.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <img src={reply.author.avatar} alt={reply.author.name} />
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{reply.author.name}</span>
                          <Badge variant={reply.author.role === 'instructor' ? 'default' : 'secondary'}>
                            {reply.author.role}
                          </Badge>
                          <span className="text-sm text-gray-500">{reply.timestamp}</span>
                        </div>
                        <p className="mt-2 text-gray-700">{reply.content}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {/* Handle reply like */}}
                          className="mt-2 text-gray-500 hover:text-gray-700"
                        >
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {reply.likes}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Reply input */}
                {showReplyInput[post.id] && (
                  <div className="space-y-2">
                    <Textarea
                      value={replyText[post.id] || ''}
                      onChange={(e) => setReplyText({ ...replyText, [post.id]: e.target.value })}
                      placeholder="Write a reply..."
                      className="min-h-[80px]"
                    />
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        onClick={() => setShowReplyInput({ ...showReplyInput, [post.id]: false })}
                      >
                        Cancel
                      </Button>
                      <Button onClick={() => handleReplySubmit(post.id)}>
                        Reply
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ForumDiscussion;
