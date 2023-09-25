"use client"
import { CommentEditType } from '@/types';
import axiosInstance from '@/utils/api/axios';
import React, { useState } from 'react'

const EditComment = ({ commentForEdit, setIsEditing, idReview, fetchReviews }: CommentEditType)=> {
    const [editedComment, setEditedComment] = useState(commentForEdit);
    const handleSaveClick = async() => {
        await axiosInstance.put(`/review/${idReview}`, {
            newComment: editedComment,
        });
        setIsEditing(false);
        fetchReviews();
    };
  return (
      <div className='w-[500px]'>
          <textarea
              className='w-full h-[100px] text-slate-900'
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
          />
          <button
              className='text-green-500 cursor-pointer'
              onClick={handleSaveClick}
          >
              save
          </button>
      </div>
  )
}

export default EditComment