@extends('admin.layout.master')
@section('content')
<div class="content-body">
    <h1 class="h3 mb-0 text-center text-gray-800">Category</h1>

    <div class="mt-5 mx-3">
        <div class="row">
            <!-- Form Column -->
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card">
                    <div class="card-body shadow">
                        <form action="{{route('admin#categoryAdd')}}" method="post" class="p-3">
                            @csrf
                            <input type="text" name="name" class="form-control @error('name') is-invalid @enderror" placeholder="Enter Category">
                            @error('name')
                                <small class=" invalid-feedback">{{$message}}</small>
                            @enderror
                            <input type="submit" value="Create" class="btn btn-outline-primary mt-3">
                        </form>
                    </div>
                </div>
            </div>

            <!-- Table Column -->
            <div class="col-md-12 col-lg-8">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered table-dark text-center">
                        <thead class="">
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">Name</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            @if ($category->count() != 0)
                            @foreach ($category as $item)
                            <tr>
                                <td>{{ ($category->currentPage() - 1) * $category->perPage() + $loop->iteration }}</td></td>
                                <td>{{ $item->name }}</td>
                                <td><a href="{{route('admin#categoryDelete',$item->id)}}" class="btn btn-sm btn-danger"><i class="fa-solid fa-trash"></i></a></td>
                            </tr>
                            @endforeach
                            @else
                            <tr>
                                <td colspan="3">There is no Data</td>
                            </tr>
                            @endif
                        </tbody>
                    </table>
                </div>

                <!-- Pagination -->
                <div class="d-flex justify-content-end">
                    {{$category->links()}}
                </div>
            </div>
        </div>
    </div>
</div>

@endsection