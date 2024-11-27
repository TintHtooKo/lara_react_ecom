@extends('admin.layout.master')
@section('content')
<div class=" content-body">
    <div class="text-center my-4">
        <h2>Product List</h2>
    </div>
    <div class="row justify-content-between align-items-center my-3 mx-1">
        <div class="col-6 col-md-2 mb-2 mb-md-0">
                <a href="{{route('admin#productAddPage')}}" class="btn btn-primary text-white "><i class="fa-solid fa-plus"></i></a>
        </div>
        <div class="col-12 col-md-6">
            <form action="{{route('admin#product')}}" method="GET">
                @csrf
                <div class="input-group">
                    <input type="text" value="{{request('search')}}" name="search" class="form-control mx-2" placeholder="Search">
                    <button type="submit" class="btn bg-dark text-white"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </form>
        </div>
    </div>
    <div class="row justify-content-between align-items-center my-3 mx-3">
        <h3 class=" mx-3 ">Total Products - {{$totalProduct}}</h3>
        <div class="">
            <a href="{{route('admin#product')}}" class=" bg-primary p-2 mx-3 rounded text-white">Show all</a>
            <a href="{{route('admin#product','lowAmt')}}" class=" bg-danger p-2 rounded text-white">Show Low stock</a>
        </div>
    </div>
    <div class="table-responsive">
        <table class="table table-hover table-bordered table-dark text-center">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                @if ($product->count() != 0)
                @foreach ($product as $item)
                <tr>
                    <td>
                        {{ ($product->currentPage() - 1) * $product->perPage() + $loop->iteration }}
                    </td>
                    <td class="col-1">
                        @php
                            $images = json_decode($item->image);
                            $firstImage = $images[0] ?? null;
                        @endphp
                        <img src="{{asset('product/'.$firstImage)}}" class="img-thumbnail shadow-sm rounded w-100" alt="">
                    </td>
                    <td>{{ $item->name }}</td>
                    <td>  
                        @if($item->stock === 0)
                        <span class=" bg-danger p-2 mx-2">Out Of Stock</span>                   
                        @elseif ($item->stock < 5)
                        {{ $item->stock}} <span class=" bg-danger p-2 mx-2">Low Stock</span>
                        @else 
                        {{ $item->stock}}
                        @endif
                    </td>
                    <td>{{ $item->category}}</td>
                    <td>{{ $item->new_price}}</td>
                    @if (Auth::user()->role == 'superadmin')
                    <td>
                        <div class=" d-flex align-items-center justify-content-center ">
                            <a href="{{route('admin#productDetail',$item->id)}}" class="btn btn-sm btn-warning cursor-pointer mx-2"><i class="fa-solid fa-eye "></i></a>
                            <a href="{{route('admin#productDelete',$item->id)}}" class="btn btn-sm btn-danger cursor-pointer"><i class="fa-solid fa-trash"></i></a>
                        </div>
                    </td>
                    @endif
                </tr>
                @endforeach
                @else
                    <tr>
                        <td colspan="5">There is no product List</td>
                    </tr>
                @endif
            </tbody>
        </table>
        <span class="d-flex justify-content-end">{{ $product->links() }}</span>
    </div>
</div>
@endsection