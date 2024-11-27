@extends('admin.layout.master')
@section('content')
<div class="content-body">
    <div class="">
        <a href="{{route('admin#product')}}" class=" p-5" style="font-size:30px"><i class="fa-solid fa-arrow-left"></i></a>
    </div>
    <div class="row justify-content-center mt-5">
        <div class="col-md-6 col-lg-4">
            <div class="card shadow">
                <div class="card-body">
                    <h3 class="card-title text-center mb-4">Add New Product</h3>
                    <form action="{{route('admin#productAdd')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" value="{{old('name')}}" class="form-control @error('name') is-invalid @enderror" name="name" placeholder="Enter Product Name">
                            @error('name')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Old Price</label>
                            <input type="number" value="{{old('oldPrice')}}" class="form-control @error('oldPrice') is-invalid @enderror" name="oldPrice" placeholder="Enter Old price">
                            @error('oldPrice')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">New Price</label>
                            <input type="number" value="{{old('newPrice')}}" class="form-control @error('newPrice') is-invalid @enderror" name="newPrice" placeholder="Enter New price">
                            @error('newPrice')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Short Description</label>
                            <textarea name="shortDesc"  class="form-control @error('shortDesc') is-invalid @enderror" placeholder="Short Description" cols="30" rows="3">{{old('shortDesc')}}</textarea>
                            @error('shortDesc')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="desc" class="form-label">Long Description</label>
                            <textarea name="longDesc" class="form-control @error('longDesc') is-invalid @enderror" placeholder="Long Description" cols="30" rows="3">{{old('longDesc')}}</textarea>
                            @error('longDesc')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="stock" class="form-label">Stock</label>
                            <input type="number" value="{{old('stock')}}" class="form-control @error('stock') is-invalid @enderror" name="stock" placeholder="Stock">
                            @error('password')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">
                            <label for="" class="form-label">Category Type</label>
                            <select name="category" class="form-select @error('category') is-invalid @enderror">
                                <option value="" selected disabled>Select Category</option>
                                @foreach ($category as $item)
                                    <option value="{{$item->id}}" @if(old('category')==$item->id) selected @endif>{{$item->name}}</option>
                                @endforeach
                            </select>
                            @error('category')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <div class="mb-3">

                            <label for="" class="form-label">Image</label>
                            <input type="file" multiple onchange="loadFile(event)" name="image[]" class="form-control @error('image') is-invalid @enderror" id="">

                            <img id="output" src="{{asset('admin/images/no_uploaded.png')}}" class="img-profile img-thumbnail" alt="">
                            @error('image')
                                <span class="invalid-feedback">{{$message}}</span>
                            @enderror
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection