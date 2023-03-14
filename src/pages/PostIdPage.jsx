import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] =useState([]);

    const [fetchPostById, isLoading, error] = useFetching( async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data);
    })

    const [fetchComments, isCommentsLoading, comError] = useFetching( async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect(() => {
        fetchPostById(params.id);
        fetchComments(params.id);
    }, [])


    return (
        <div>
            <h4 style={{justifyContent: "right", display: "flex"}}>Вы открыли пост {params.id}</h4>
            {isLoading
            ? <Loader/>
            : <div style={{fontSize: 25,marginTop: 30, fontWeight: "bold"}}> {post.id}. {post.title}</div>
            }
            <h3 style={{marginTop: 30}}>
                Коментарии:
            </h3>
            {isCommentsLoading
            ? <Loader/>
            :   <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 25, border: "1px solid", borderRadius: 50, paddingLeft: 20}}>
                            <h5 style={{fontWeight: "bold", fontSize: 16}}>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostIdPage;